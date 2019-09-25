// https://m.vipbcw.com/register/index
const CryptoJS = require('crypto-js')

var pwd = 'a12345678'
var phone = '13751685424'
var captcha = '5526'
var timestemp = Date.parse(new Date) / 1e3

function test(pwd, phone, captcha, timestemp){
    var submit_data = {
        mobile_phone: phone,
        password: pwd, 
        phone_captcha: captcha
    }
    
    var submit_json = JSON.stringify(submit_data)
    
    var md5_data = `data={${submit_json}}&device=WechatMall/1.0/2.2.1&timestemp=${timestemp}&token=FD92DF750B32765DA01A119BE1601D46`
    
    var to_encry_data = {
        data: submit_json,
        device: "WechatMall/1.0/2.2.1", 
        timestemp: timestemp,
        token: "", 
        sign: CryptoJS.MD5(md5_data),
        token: ""
    }
    
    var r = JSON.stringify(to_encry_data)
    , o = "b92dff3973ebdc1786803c2ce976a627"
    , i = o.substring(0, 16);
    o = CryptoJS.enc.Utf8.parse(o),
    i = CryptoJS.enc.Utf8.parse(i);
    var u = CryptoJS.enc.Utf8.parse(r);
    var params = CryptoJS.AES.encrypt(u, o, {
          iv: i,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding
    }).toString();
    return params
}

console.log(test(pwd, phone, captcha, timestemp))