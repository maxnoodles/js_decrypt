const CryptoJS = require('crypto-js')

aesEncrypt = function(e) {
    var a = CryptoJS.MD5("login.189.cn");
    var c = CryptoJS.enc.Utf8.parse(a);
    var b = CryptoJS.enc.Utf8.parse("1234567812345678");
    var d = CryptoJS.AES.encrypt(e, c, {
        iv: b
    });
    return d + ""
}

var encry_pwd = aesEncrypt('a12345678')
console.log(encry_pwd)
