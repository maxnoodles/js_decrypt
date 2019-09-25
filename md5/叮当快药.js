// https://m.ddky.com/regsiter.html

function md5(t) {
        function e(t, e) {
            return t << e | t >>> 32 - e
        }
        function s(t, e) {
            var s, i, o, n, a;
            return o = 2147483648 & t,
            n = 2147483648 & e,
            s = 1073741824 & t,
            i = 1073741824 & e,
            a = (1073741823 & t) + (1073741823 & e),
            s & i ? 2147483648 ^ a ^ o ^ n : s | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ n : 1073741824 ^ a ^ o ^ n : a ^ o ^ n
        }
        function i(t, e, s) {
            return t & e | ~t & s
        }
        function o(t, e, s) {
            return t & s | e & ~s
        }
        function n(t, e, s) {
            return t ^ e ^ s
        }
        function a(t, e, s) {
            return e ^ (t | ~s)
        }
        function r(t, o, n, a, r, c, d) {
            return t = s(t, s(s(i(o, n, a), r), d)),
            s(e(t, c), o)
        }
        function c(t, i, n, a, r, c, d) {
            return t = s(t, s(s(o(i, n, a), r), d)),
            s(e(t, c), i)
        }
        function d(t, i, o, a, r, c, d) {
            return t = s(t, s(s(n(i, o, a), r), d)),
            s(e(t, c), i)
        }
        function l(t, i, o, n, r, c, d) {
            return t = s(t, s(s(a(i, o, n), r), d)),
            s(e(t, c), i)
        }
        function u(t) {
            var e, s = t.length, i = s + 8, o = (i - i % 64) / 64, n = 16 * (o + 1), a = Array(n - 1), r = 0, c = 0;
            while (c < s)
                e = (c - c % 4) / 4,
                r = c % 4 * 8,
                a[e] = a[e] | t.charCodeAt(c) << r,
                c++;
            return e = (c - c % 4) / 4,
            r = c % 4 * 8,
            a[e] = a[e] | 128 << r,
            a[n - 2] = s << 3,
            a[n - 1] = s >>> 29,
            a
        }
        function h(t) {
            var e, s, i = "", o = "";
            for (s = 0; s <= 3; s++)
                e = t >>> 8 * s & 255,
                o = "0" + e.toString(16),
                i += o.substr(o.length - 2, 2);
            return i
        }
        function m(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", s = 0; s < t.length; s++) {
                var i = t.charCodeAt(s);
                i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192),
                e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224),
                e += String.fromCharCode(i >> 6 & 63 | 128),
                e += String.fromCharCode(63 & i | 128))
            }
            return e
        }
        var p, g, f, A, v, I, y, C, b, w = Array(), k = 7, S = 12, V = 17, E = 22, B = 5, x = 9, O = 14, j = 20, T = 4, Q = 11, D = 16, U = 23, N = 6, F = 10, R = 15, L = 21;
        for (t = m(t),
        w = u(t),
        I = 1732584193,
        y = 4023233417,
        C = 2562383102,
        b = 271733878,
        p = 0; p < w.length; p += 16)
            g = I,
            f = y,
            A = C,
            v = b,
            I = r(I, y, C, b, w[p + 0], k, 3614090360),
            b = r(b, I, y, C, w[p + 1], S, 3905402710),
            C = r(C, b, I, y, w[p + 2], V, 606105819),
            y = r(y, C, b, I, w[p + 3], E, 3250441966),
            I = r(I, y, C, b, w[p + 4], k, 4118548399),
            b = r(b, I, y, C, w[p + 5], S, 1200080426),
            C = r(C, b, I, y, w[p + 6], V, 2821735955),
            y = r(y, C, b, I, w[p + 7], E, 4249261313),
            I = r(I, y, C, b, w[p + 8], k, 1770035416),
            b = r(b, I, y, C, w[p + 9], S, 2336552879),
            C = r(C, b, I, y, w[p + 10], V, 4294925233),
            y = r(y, C, b, I, w[p + 11], E, 2304563134),
            I = r(I, y, C, b, w[p + 12], k, 1804603682),
            b = r(b, I, y, C, w[p + 13], S, 4254626195),
            C = r(C, b, I, y, w[p + 14], V, 2792965006),
            y = r(y, C, b, I, w[p + 15], E, 1236535329),
            I = c(I, y, C, b, w[p + 1], B, 4129170786),
            b = c(b, I, y, C, w[p + 6], x, 3225465664),
            C = c(C, b, I, y, w[p + 11], O, 643717713),
            y = c(y, C, b, I, w[p + 0], j, 3921069994),
            I = c(I, y, C, b, w[p + 5], B, 3593408605),
            b = c(b, I, y, C, w[p + 10], x, 38016083),
            C = c(C, b, I, y, w[p + 15], O, 3634488961),
            y = c(y, C, b, I, w[p + 4], j, 3889429448),
            I = c(I, y, C, b, w[p + 9], B, 568446438),
            b = c(b, I, y, C, w[p + 14], x, 3275163606),
            C = c(C, b, I, y, w[p + 3], O, 4107603335),
            y = c(y, C, b, I, w[p + 8], j, 1163531501),
            I = c(I, y, C, b, w[p + 13], B, 2850285829),
            b = c(b, I, y, C, w[p + 2], x, 4243563512),
            C = c(C, b, I, y, w[p + 7], O, 1735328473),
            y = c(y, C, b, I, w[p + 12], j, 2368359562),
            I = d(I, y, C, b, w[p + 5], T, 4294588738),
            b = d(b, I, y, C, w[p + 8], Q, 2272392833),
            C = d(C, b, I, y, w[p + 11], D, 1839030562),
            y = d(y, C, b, I, w[p + 14], U, 4259657740),
            I = d(I, y, C, b, w[p + 1], T, 2763975236),
            b = d(b, I, y, C, w[p + 4], Q, 1272893353),
            C = d(C, b, I, y, w[p + 7], D, 4139469664),
            y = d(y, C, b, I, w[p + 10], U, 3200236656),
            I = d(I, y, C, b, w[p + 13], T, 681279174),
            b = d(b, I, y, C, w[p + 0], Q, 3936430074),
            C = d(C, b, I, y, w[p + 3], D, 3572445317),
            y = d(y, C, b, I, w[p + 6], U, 76029189),
            I = d(I, y, C, b, w[p + 9], T, 3654602809),
            b = d(b, I, y, C, w[p + 12], Q, 3873151461),
            C = d(C, b, I, y, w[p + 15], D, 530742520),
            y = d(y, C, b, I, w[p + 2], U, 3299628645),
            I = l(I, y, C, b, w[p + 0], N, 4096336452),
            b = l(b, I, y, C, w[p + 7], F, 1126891415),
            C = l(C, b, I, y, w[p + 14], R, 2878612391),
            y = l(y, C, b, I, w[p + 5], L, 4237533241),
            I = l(I, y, C, b, w[p + 12], N, 1700485571),
            b = l(b, I, y, C, w[p + 3], F, 2399980690),
            C = l(C, b, I, y, w[p + 10], R, 4293915773),
            y = l(y, C, b, I, w[p + 1], L, 2240044497),
            I = l(I, y, C, b, w[p + 8], N, 1873313359),
            b = l(b, I, y, C, w[p + 15], F, 4264355552),
            C = l(C, b, I, y, w[p + 6], R, 2734768916),
            y = l(y, C, b, I, w[p + 13], L, 1309151649),
            I = l(I, y, C, b, w[p + 4], N, 4149444226),
            b = l(b, I, y, C, w[p + 11], F, 3174756917),
            C = l(C, b, I, y, w[p + 2], R, 718787259),
            y = l(y, C, b, I, w[p + 9], L, 3951481745),
            I = s(I, g),
            y = s(y, f),
            C = s(C, A),
            b = s(b, v);
        var M = h(I) + h(y) + h(C) + h(b);
        return M.toUpperCase()
    }

function l(t, e) {
    var s = Object.keys(t).sort()
      , i = s.reduce(function(e, s) {
        return e + s + t[s]
    }, "")
      , o = "".concat(t.method).concat(i).concat(e);
    return md5(o)
}


var password = 'qwer1234'
var userName = '13751678541'
var now = new Date()
var time = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
// console.log(time)

var data = {
    method: "ddsy.user.reg.reguser",
    password: md5(password).toLowerCase(),
    plat: "H5",
    platform: "H5",
    smsCode: "3752",
    t: time,
    userName: userName,
    v: "1.0",
    versionName: "5.3.0"
}
var key = '6C57AB91A1308E26B797F4CD382AC79D'

console.log(l(data, key))