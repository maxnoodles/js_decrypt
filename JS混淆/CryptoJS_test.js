const CryptoJS = require("crypto-js");

var md5 = CryptoJS.MD5('test')
// 显示转换
console.log('md5: ' + md5.toString())
// 隐式转换
// console.log(md5 + '')

var sha1 = CryptoJS.SHA1('test')
console.log('sha1: ' + sha1.toString())

// Hmac 系列加密需要 2 个参数，第一个是被加密的字符串，第二个是秘钥
var HmacSHA1 = CryptoJS.HmacSHA1('test', '11111111')
console.log('HmacSHA1: ' + HmacSHA1.toString())


// 通过先创建加密对象的方式加密
// var sha256 = CryptoJS.algo.SHA256.create();
// sha256.update("Message Part 1");
// sha256.update("Message Part 2");
// sha256.update("Message Part 3");
// ​var hash = sha256.finalize();

/*  将字符串以一定的方式解析成字节集，才能对字节集进行偏移等操作，默认是加密算法以 Utf8 进行解析，以 HEX 输出
    var words = CryptoJS.enc.Base64.parse("SGVsbG8sIFdvcmxkIQ==");
    var base64 = CryptoJS.enc.Base64.stringify(words);
    ​
    var words = CryptoJS.enc.Latin1.parse("Hello, World!");
    var latin1 = CryptoJS.enc.Latin1.stringify(words);
    ​
    var words = CryptoJS.enc.Hex.parse("48656c6c6f2c20576f726c6421");
    var hex = CryptoJS.enc.Hex.stringify(words);
    ​
    var words = CryptoJS.enc.Utf8.parse("𔭢");
    var utf8 = CryptoJS.enc.Utf8.stringify(words);
    ​
    var words = CryptoJS.enc.Utf16.parse("Hello, World!");
    var utf16 = CryptoJS.enc.Utf16.stringify(words);
    ​
    var words = CryptoJS.enc.Utf16LE.parse("Hello, World!");
    var utf16 = CryptoJS.enc.Utf16LE.stringify(words);
*/


// 密码可以不解析，默认会使用 Utf8 解析
var pwd = CryptoJS.enc.Utf8.parse('hello word')
console.log('直接对 Utf8 的字符串 toString: ', pwd.toString()) // 是 hex 16进制
// 秘钥一定要解析
var key = CryptoJS.enc.Utf8.parse('1234567812345678') // 16位秘钥
var iv = CryptoJS.enc.Utf8.parse('1234567812345678') // 16位秘钥

var cfg = {
    mode: CryptoJS.mode.CBC,  // 指明加密方式， ECB 模式不需要 iv
    padding: CryptoJS.pad.Pkcs7, // 指明填充方式
    iv:iv, // 偏移量
}
//AES 加密 参数 (被加密字符串， 秘钥， 对象(加密模式，加密填充方式，偏移向量))
var aes = CryptoJS.AES.encrypt(pwd, key, cfg)  // 一个位数组

console.log('aes: ' + aes.toString()) // 对 aes 直接 toString 是 Base64 的输出： 
console.log('ciphertext： ' + aes.ciphertext.toString())

// AES 解密
var de_aes = CryptoJS.AES.decrypt(aes, key, cfg);
// 要指明 toString 的解析方法
console.log( de_aes.toString(CryptoJS.enc.Utf8) );


var words = CryptoJS.enc.Base64.parse("SGVsbG8sIFdvcmxkIQ==");
console.log('对 base64 对象直接 toString: ' + words.toString()) // hex 16进制
// console.log(words.toString(CryptoJS.enc.Base64))

var base64 = CryptoJS.enc.Base64.stringify(words);
console.log(base64)


