// https://wechat.gclfax.com/html/register/login.html?title=%E7%99%BB%E5%BD%95


const CryptoJS = require('crypto-js')

function tripledes(message) {
    //required
    //<script src="../js/rollups/tripledes.js"></script>
    //<script src="../js/components/mode-ecb-min.js"></script>
    var key = 'Pog4iu6OqIkKRpDT';
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    // console.log('直接 toString' + encrypted.toString()) // 对加密结果直接 toString 就是 base64
    // var enstr = CryptoJS.enc.Base64.parse(encrypted.toString());
    // return enstr.toString().toUpperCase();
    return encrypted.ciphertext.toString().toUpperCase()
}

var pwd = tripledes('15615618453')
console.log(pwd)  // DD4428E46F6EEEB059B9FFCA5128F3B5
