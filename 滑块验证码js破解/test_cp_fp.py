import requests
import execjs

js_path = r'C:\\Users\\86137\\OneDrive\\桌面\\js_study\\JS逆向\\滑块验证码js破解\\my_cp.js'
with open(js_path, encoding='utf-8') as f:
    js_data = f.read()

my_cb = execjs.compile(js_data).call('my_cb')

headers = {
    'Sec-Fetch-Mode': 'no-cors',
    'Referer': 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html?cd=https%3A%2F%2Fcc.res.netease.com%2F_next%2F_static%2Fstatic%2Fstyles%2F&cf=urs_component.css%3Fversion%3D20190904&MGID=1569480120894.9639&wdaId=&pkid=PFClpTB&product=cc',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
}

fp = r'swL4OvIjzam6f8697KaZ1YnViIP/bKvi6p3lyzLSKIRZsJa23LZT\yIAHur8\1RLpWgIosjhnpqeki\UGMO381vqt\SzdhBciwNhsv4E/z+abwqN+V/dadrJ1oqBe7gPTe++qWSSoLW2\bjoiAl1PickwhhKaS6\rbdDdnAP48RIgOA+:1570447154508'
params = (
    ('id', '744e2a6324ec5370616241baf4507538'),
    ('fp', fp),
    ('https', 'true'),
    ('type', '2'),
    ('version', '2.11.4'),
    ('dpr', '1.25'),
    ('dev', '1'),
    ('cb', my_cb),
    ('ipv6', 'false'),
    ('runEnv', '10'),
    ('width', '220'),
    ('token', ''),
    ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html'),
    ('callback', '__JSONP_skwoqtr_0'),
)

response = requests.get('https://webzjcaptcha.reg.163.com/api/v2/get', headers=headers, params=params)
print(response.text)



