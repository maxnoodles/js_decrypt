import requests
from datetime import datetime
import time
import random
import json
import re
import execjs
import cv2

session = requests.Session()
headers = {
    'Sec-Fetch-Mode': 'cors',
    'Referer': 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html?cd=https%3A%2F%2Fcc.res.netease.com%2F_next%2F_static%2Fstatic%2Fstyles%2F&cf=urs_component.css%3Fversion%3D20190904&MGID=1570335110013.2468&wdaId=&pkid=PFClpTB&product=cc',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
    'Content-Type': 'application/json',
}
origin_width = 320
wycc_width = 220
wycc_id = '744e2a6324ec5370616241baf4507538'

def findfic(target='background.jpg', template='front.png'):
    """
    生成滑块匹配距离
    :param target: 滑块背景图
    :param template: 滑块图片路径
    :return: 模板匹配距离
    """
    target_rgb = cv2.imread(target)
    target_gray = cv2.cvtColor(target_rgb, cv2.COLOR_BGR2GRAY)
    template_rgb = cv2.imread(template, 0)
    # 使用相关性系数匹配， 结果越接近1 表示越匹配
    # https://www.cnblogs.com/ssyfj/p/9271883.html
    res = cv2.matchTemplate(target_gray, template_rgb, cv2.TM_CCOEFF_NORMED)
    # opencv 的函数 minMaxLoc：在给定的矩阵中寻找最大和最小值，并给出它们的位置
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
    # 因为滑块只需要 x 坐标的距离，放回坐标元组的 [0] 即可
    if abs(1 - min_val) <= abs(1 - max_val):
        distance = min_loc[0]
    else:
        distance = max_loc[0]
    return distance


def my_rtid():
    e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    t = 32
    str_list = [e[int(random.random() * len(e))] for i in range(t)]
    return ''.join(str_list)
# print(my_rtid())
rtid = my_rtid()
timestamp = int(time.time() * 1000)
callback = '__JSONP_qaue9y7_0'

# 第一个请求, 初始化滑块
init_params = (
    ('pd', 'cc'),
    ('pkid', 'PFClpTB'),
    ('pkht', 'cc.163.com'),
    ('channel', '0'),
    ('topURL', 'http://cc.163.com/category/'),
    ('rtid', rtid),
    # ('nocache', '1570335112543'),
    ('nocache', timestamp),
)
init_resp = session.get('https://dl.reg.163.com/dl/ini', headers=headers, params=init_params)
# print('init_resp: ', init_resp.text)

# 第二个请求，获得滑块的图片
fp_js_path = r'C:\Users\86137\OneDrive\桌面\js_study\JS逆向\滑块验证码js破解\my_fp.js'
with open(fp_js_path, 'r') as f:
    fp_code = f.read()
fp = execjs.compile(fp_code).call('my_fp')
print(fp)

cb_js_path = r'C:\Users\86137\OneDrive\桌面\js_study\JS逆向\滑块验证码js破解\my_cb.js'
with open(cb_js_path, 'r') as f:
    cb_code = f.read()
cb = execjs.compile(cb_code).call('my_cb')
print(cb)

params = (
    ('id', wycc_id),
    ('fp', fp),
    ('https', 'true'),
    ('type', '2'),
    ('version', '2.11.4'),
    ('dpr', '1.25'),
    ('dev', '1'),
    ('cb', cb),
    ('ipv6', 'false'),
    ('runEnv', '10'),
    ('width', '220'),
    ('token', ''),
    ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html'),
    ('callback',callback),
)

get_resp = session.get('https://webzjcaptcha.reg.163.com/api/v2/get', headers=headers, params=params)
print(get_resp.text)
get_json = re.search(rf'{callback}\((.*?)\)', get_resp.text).group(1)
get_dict = json.loads(get_json)

bg = get_dict['data']['bg'][0]
front = get_dict['data']['front'][0]
token = get_dict['data']['token']
print(bg, front, token)

bg_resp = session.get(bg, headers=headers)
with open('./background.jpg', 'wb') as f:
    f.write(bg_resp.content)

front_resp = session.get(front, headers=headers)
with open('./front.png', 'wb') as f:
    f.write(front_resp.content)

distance = findfic('background.jpg', 'front.png') 
true_distance = distance * (wycc_width / origin_width)
print(distance, round(true_distance))

trace_js_path = r'C:\Users\86137\OneDrive\桌面\js_study\JS逆向\滑块验证码js破解\my_trace.js'
with open(trace_js_path, 'r', encoding='utf-8') as f:
    trace_code = f.read()
trace_data, new_cb = execjs.compile(trace_code).call('my_trace', token, true_distance)
print(trace_data, new_cb)
trace_data = json.loads(trace_data)


time.sleep(1)
check_params = (
    ('id', wycc_id),
    ('token', token),
    # ('acToken', my_actoken),
    ('data', json.dumps(trace_data)),
    ('width', '220'),
    ('type', '2'),
    ('version', '2.11.4'),
    ('cb', new_cb),
    ('extraData', ''),
    ('runEnv', '10'),
    ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html'),
    ('callback', callback),
)
check_resp = session.get('https://webzjcaptcha.reg.163.com/api/v2/check', headers=headers, params=check_params)
print(check_resp.text)
