// https://account.youzan.com/login

const CryptoJS = require('crypto-js');

function test(e){
    var t = CryptoJS;
    var r = t.enc.Utf8.parse("youzan.com.aesiv")
    var o = t.enc.Utf8.parse("youzan.com._key_");
    return e = t.enc.Utf8.parse(e),
          t.AES.encrypt(e, o, {
              mode: t.mode.CBC,
              padding: t.pad.Iso10126,
              iv: r
          }).toString()
}

pwd = 'a12345678'
console.log(test(pwd))
