// http://xayrtx.cn/ebtouch/

var hexcase = 1;
/* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = "";
/* base-64 pad character. "=" for strict RFC compliance   */
var chrsz = 8;
/* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
* These are the functions you'll usually want to call
* They take string arguments and return either hex or base-64 encoded strings
*/
function hex_sha1(s) {
    return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}
function b64_sha1(s) {
    return binb2b64(core_sha1(str2binb(s), s.length * chrsz));
}
function str_sha1(s) {
    return binb2str(core_sha1(str2binb(s), s.length * chrsz));
}
function hex_hmac_sha1(key, data) {
    return binb2hex(core_hmac_sha1(key, data));
}
function b64_hmac_sha1(key, data) {
    return binb2b64(core_hmac_sha1(key, data));
}
function str_hmac_sha1(key, data) {
    return binb2str(core_hmac_sha1(key, data));
}

/*
* Perform a simple self-test to see if the VM is working
*/
function sha1_vm_test() {
    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
* Calculate the SHA-1 of an array of big-endian words, and a bit length
*/
function core_sha1(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (24 - len % 32);
    x[((len + 64 >> 9) << 4) + 15] = len;

    var w = Array(80);
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    var e = -1009589776;

    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;

        for (var j = 0; j < 80; j++) {
            if (j < 16)
                w[j] = x[i + j];
            else
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);

}

/*
* Perform the appropriate triplet combination function for the current
* iteration
*/
function sha1_ft(t, b, c, d) {
    if (t < 20)
        return (b & c) | ((~b) & d);
    if (t < 40)
        return b ^ c ^ d;
    if (t < 60)
        return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
}

/*
* Determine the appropriate additive constant for the current iteration
*/
function sha1_kt(t) {
    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
}

/*
* Calculate the HMAC-SHA1 of a key and some data
*/
function core_hmac_sha1(key, data) {
    var bkey = str2binb(key);
    if (bkey.length > 16)
        bkey = core_sha1(bkey, key.length * chrsz);

    var ipad = Array(16)
      , opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
    return core_sha1(opad.concat(hash), 512 + 160);
}

/*
* Add integers, wrapping at 2^32. This uses 16-bit operations internally
* to work around bugs in some JS interpreters.
*/
function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}

/*
* Bitwise rotate a 32-bit number to the left.
*/
function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}

/*
* Convert an 8-bit or 16-bit string to an array of big-endian words
* In 8-bit function, characters >255 have their hi-byte silently ignored.
*/
function str2binb(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
    return bin;
}

/*
* Convert an array of big-endian words to a string
*/
function binb2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (24 - i % 32)) & mask);
    return str;
}

/*
* Convert an array of big-endian words to a hex string.
*/
function binb2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }
    return str;
}

/*
* Convert an array of big-endian words to a base-64 string
*/
function binb2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32)
                str += b64pad;
            else
                str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
    }
    return str;
}
var bDebug;
try {
    execScript('\nfunction StrConv(v)\ndim i, n, s, s2, c, nc\nn =LenB(v):	i =1: s =""\ndo while i<= n\nc =MidB(v, i, 1)\nnc =AscB(c)\nif nc >128 then\ni =i +1\nc =MidB(v, i, 1)\nnc =nc*256 +AscB(c)\nend if\nc =Chr(nc)\ns = s & c\ni =i +1\nloop\nStrConv =s\nend function\n\nFunction IsVBDate(v)\nIsVBDate =IsDate(v)\nEnd Function\n\nFunction vbTrim(v)\nvbTrim =Trim(v)\nEnd Function\n', 'VBScript');
} catch (e) {}
function http_Get(szUrl, strType) {
    var ohttp = new ActiveXObject('Microsoft.xmlhttp')
      , strText = ''
      , isTest = 0;
    try {
        isTest = new ActiveXObject("NetBox");
        isTest = 1
    } catch (e) {}
    if (isTest) {
        ohttp.open("GET", "/XMLHttp.asp?url=" + szUrl, false);
    } else {
        ohttp.open("GET", szUrl, false);
    }
    ohttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ohttp.send();
    strType = validInt(strType);
    if (strType)
        strText = StrConv(ohttp.responseBody);
    else
        strText = ohttp.responseText;
    if (ohttp.status == 200)
        return (strText);
    return (parseError2(strText));
}
function http_POST(szUrl, strData, strType) {
    var ohttp = new ActiveXObject('Microsoft.xmlhttp')
      , strText = '';
    ohttp.open("POST", "/XMLHttp.asp?url=" + szUrl, false);
    ohttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ohttp.send(strData);
    strType = validInt(strType);
    if (strType)
        strText = StrConv(ohttp.responseBody);
    else
        strText = ohttp.responseText;
    if (ohttp.status == 200)
        return (strText);
    return (parseError2(strText));
}
function parseError2(strData) {
    if (strData.length == 0)
        return (strData);
    var n, a = strData.split("<p>");
    n = a[1].length;
    s = a[2].substr(0, a[2].length - 2);
    if (bDebug == 0)
        alert(s);
    s = "Err.Number=" + parseInt(a[1].substr(n - 7, 4), 16) + "\nErr.Description=" + s + "\nErr.Source=" + a[1].substr(0, n - 13);
    n = a[3].indexOf(", line ");
    s += "\nErr.ASPFile=" + a[3].substr(0, n);
    s += "\nErr.ASPLine=" + parseInt(a[3].substr(n + 7));
    if (bDebug == 1)
        alert(s);
    return (s);
}

function test(pwd){
    var random = '4B93E772AE273FE03784AEFF3339C72CE41A48DE5BD79D8E49D6DABF8401435DA5B59A347EBD2407331D5BED3CD96FE506663766EA96AE822E905423F8B0B4769DE17DC4AC59D0CCDAFB1764CA7C85ABB15FB8C47DD0AF0BBFA901E83CE2FD98A9441A4C812B8E08BC6456134E647D0D15611777CA124EFAC186B787B843A1DF40B0E95FE24CEB1D9E154AF8B2AFAEAA34328BF20EA50CBEADEBF7A0B5F42B3C185E0744A0BEAE3115B405ED0FAE1B136AB21D9D0E485249456D0AB3AE6D4C86BDC0305C88104EFFDD3C41883305DC75B74B92F94702CD9C0AD3180E22D87784B55DA80EE15B2702DD45895DBEC0B701424040C3AD17583FE56634807108D1CF';
    var SharedKey = hex_sha1(pwd);
    var password = hex_sha1(SharedKey + random);
    return password
}

console.log(test('88888888'))

