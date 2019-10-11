import requests
import execjs

headers = {
    'Sec-Fetch-Mode': 'cors',
    'Referer': 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html?cd=https%3A%2F%2Fcc.res.netease.com%2F_next%2F_static%2Fstatic%2Fstyles%2F&cf=urs_component.css%3Fversion%3D20190904&MGID=1570606259476.5786&wdaId=&pkid=PFClpTB&product=cc',
    'Origin': 'https://dl.reg.163.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
    'Content-type': 'application/x-www-form-urlencoded',
}

d_js_path = r'C:\Users\86137\OneDrive\桌面\js_study\JS逆向\滑块验证码js破解\my_d.js'
with open(d_js_path, 'r') as f:
    d_code = f.read()

my_d = execjs.compile(d_code).call('my_d')
# print(my_d)


data = {
    'd': 'abc',
    'v': '38eaf165',
    'cb': '_WM_'
}

response = requests.post('https://webzjac.reg.163.com/v2/d', headers=headers, data=data)
print(response.text)

data = {
  'd': 'abc',
  'v': '38eaf165',
  'cb': '_WM_'
}

response = requests.post('https://webzjac.reg.163.com/v2/b', headers=headers, data=data)
print(response.text)