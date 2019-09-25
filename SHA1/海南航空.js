// http://m.hnair.com/#/login/true?_k=ikwtzd

const CryptoJS = require('crypto-js')

var certificateHash = '6093941774D84495A5D15D8F909CAA1E';
var hardCode = '21047C596EAD45209346AE29F0350491';

var phoneNum = "13751658555";
var pwd = "a12345";
var timestamp = new Date().getTime();
console.log(timestamp)

var str = '10149\
9E4BBDDEC6C8416EA380E418161A7CD3\
com.hnair.spa.web.standardstandard\
7.5.0\
defualt_web_diddefualt_web_gtcid' + phoneNum + pwd +
'5d85af4coNPNVSDPti5xzSpYqxfggK2vm7mnKj11\
HTML5\
zh-CN\
slatslng\
Win32' + timestamp + 
'5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1-480true';

var sign = CryptoJS.HmacSHA1(str + certificateHash, hardCode)
console.log(sign.toString().toUpperCase()) // 64E4F3CAE3D8FA0F6E3FCD4877FC87159CD40613

// var desc = "iat%2BQ5z8%2B4dasDscyyGDjMM2vOwzkmj4/HYHyt4USMYv00S0gRAsTIAwcVrh5P1%2BI/2mYkOtSM/qXxx9ijCaeCEXZ5TEWmg8fq7qr5Gp2wO6yzzMQpFq6PbZ00ZDLq4XP8VZR18QAicdVU8RRaljHgylMXRYM2Y0XBPUMR4eJBlp7AgE5HXw/NgIHqxVX65FJJtvQYzAxS/6ZPNSLlROInGvb%2B6APGfVJO/XL1%2BkHN72MAoVtdkETaGopOEeJsj/9EIgBn4bqMs7l1C/3I0mKJJjt3uI4kMF8eCfwMC7JalQVJD%2BKvGG2gC3mBGxtdb0XAuSfMjUxF/IXCC03Or1NGYhNCdGHElU2ZCFR0Lb7C4=".replace(/%2B/g, '+')
// console.log(desc)


var process = function(e) {
    var t = -979402
      , r = 979402;
    _nuz = -705100,
    _nux = 705102,
    _mlq = 1,
    _zmmn = -1,
    _xhce = 664917,
    _pvaa = -713216,
    _tmlq = 713456,
    _bbm = 933985,
    _lxz = 33853,
    _sbx = -93056,
    _nnuy = "lit",
    _uuz = "map",
    _jggu = "it",
    _yyf = "function",
    _oos = "_",
    _hsvuz = "sub",
    _isus = "cha",
    _paww = "str",
    _lyydw = "sp",
    _qndkq = "cha",
    _muzz = "spl",
    _unny = "base",
    _heeqc = Object();
    var n = {
        _base: "",
        _baseTable: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        _baseTables: [-2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -2, -1, -1, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 62, -2, -2, -2, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -2, -2, -2, -2, -2, -2, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -2, -2, -2, -2, -2, -2, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
        _baseLink: "120112130113220101010101011201011201121313220101",
        _basefunction: function(e, t) {
            switch (e = 2 * e,
            str_1 = this._baseLink[e],
            str_2 = this._baseLink[e + 1],
            result = "",
            result = t.substring(0, str_2),
            parseInt(str_1)) {
            case _mlq:
                this._base += this._baseTables[result];
                break;
            case _mlq + _zmmn:
                this._base += this._baseTable[result];
                break;
            default:
                this._base += result
            }
            return t.substring(this._baseLink[e + 1])
        }
    };
    n._baseLink = n._baseLink[_lyydw + _nnuy](""),
    n._baseTable = n._baseTable[_muzz + _jggu]("");
    for (var i = t + r; i < n._baseLink.length / (_nux + _nuz); i++)
        e = n._basefunction(i, e);
    return n._base
};



var str_json = {"xy":["{\"x\":null,\"y\":null,\"t\":1569060216085}","{\"x\":null,\"y\":null,\"t\":1569060229536}","{\"x\":null,\"y\":null,\"t\":1569060272043}","{\"x\":null,\"y\":null,\"t\":1569060274611}"],"fingerprint":783100800}
str_json = JSON.stringify(str_json)
console.log(JSON.stringify(str_json))

var zre = '483991120105853551256740710651221217723'
var zzre = process(zre)

function eq_u(e, t) {
    var r = CryptoJS.enc.Utf8.parse(t)
    var encrypted = CryptoJS.DES.encrypt(e, r, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString()
}
console.log(zzre)
var des = eq_u(str_json, zzre)

console.log(des)