/*
    http://cc.163.com/category/live/

    1.找到登录 url https://dl.reg.163.com/dl/l
        检查登录 url 所需要的加密参数：pw, rtid, tk, pkid(固定)
        cookies 所需加密参数: gdxidpyhxdE, utid, l_s_ccPFClpTB(固定)

    2. 查找这三个加密参数是通过 url 请求还是 js 生成
        url 请求获得: tk (需要 rtid) (https://dl.reg.163.com/dl/gt?un=925684%40163.com&pkid=PFClpTB&pd=cc&channel=0&topURL=http%3A%2F%2Fcc.163.com%2Fcategory%2Flive%2F&rtid=dOsV6wdX1rT2R3wIAlZDuohgesaVg1DJ&nocache=1570325797821)
        js 生成: trid, pw

    4. 查找 cookies 是由 url 还是 js 生成
        除了 l_s_ccPFClpTB，其他都是 js 生成

    5. 找到网易滑块相关的 url 
        1. https://dl.reg.163.com/dl/ini?pd=cc&pkid=PFClpTB&pkht=cc.163.com&channel=0&topURL=http%3A%2F%2Fcc.163.com%2Fcategory%2Flive%2F&rtid=Pv7h7Vt1SxFSOXMDaLvtzcQdXqEB4Tmr&nocache=1570326450700
            初始化易盾 url
            加密参数: rtid 

        2. https://webzjcaptcha.reg.163.com/api/v2/getconf?id=744e2a6324ec5370616241baf4507538&ipv6=false&referer=https%3A%2F%2Fdl.reg.163.com%2Fwebzj%2Fv1.0.1%2Fpub%2Findex2_new.html&type=2&callback=__JSONP_qaue9y7_0
            返回: actoken

        3. https://webzjac.reg.163.com/v2/config/js?pn=YD00000710348764&cb=__wmjsonp_9fda5e50&t=1570330087079
            需要参数: pn
            js 生成 cookies

        4. https://webzjcaptcha.reg.163.com/api/v2/get?id=744e2a6324ec5370616241baf4507538&fp=xkgWXll%5CCiMCXJfeNAZ5r6wqufPOotJ1KhT7WVB%2FUHtA9q7%2FCHYSLA2ekaE4smQrAkLHux9S8%5CCh7cLlUv5fddky%2FELCShEDKIuQM%2FeYJsRCRtRGdntvV%2BtubW9KZU0aaaV%2Fb74rJ2SsRVJ4YKq9RT20jS7KjU1AVgh0Y3fRlPezE6qd%3A1570327351808&https=true&type=2&version=2.11.4&dpr=1.25&dev=1&cb=xjFA7%5C%5C6JE0yFfEfmt7Xk40JTPxKgT8p%5C5Ap0e2%5CfYUjl7%5C8%5CMscKxDMSicOiafO&ipv6=false&runEnv=10&width=220&token=&referer=https%3A%2F%2Fdl.reg.163.com%2Fwebzj%2Fv1.0.1%2Fpub%2Findex2_new.html&callback=__JSONP_561dkr0_0
            返回: 滑块背景图和滑块图片，验证时的 token
            请求参数: id, fp, cb, bid
            fp: 指纹算法，对应 cookies 中的 gdxidpyhxdE。
                一般指纹算法会取浏览器的一组数据放入一个数组，再用数组的 join 方法拼接，再进入一个摘要算法取一个哈希值。
                解决方法，找到 join 的数组，随机改变一些值，例如浏览器版本号，屏幕大小等等。

        5. https://webzjac.reg.163.com/v2/b
            请求参数: d, v(固定)(38eaf165), cb(_WM_)

        6. https://webzjcaptcha.reg.163.com/api/v2/check?id=744e2a6324ec5370616241baf4507538&token=e60692d05e1c47328f77c9f401e65364&acToken=9ca17ae2e6ffcda170e2e6ee8eb6688b88feafb86de9968ea7d44e968f9a84f365b194bcd4ef3aa793998aec2af0feaec3b92ab2b2e188e15f95928b91ee5f969b9fb6d55a8ab1f791ce80b89e8ab0b76295b6ee9e&data=%7B%22d%22%3A%22BfQ1UDLNIcrm1r8cwIu%2FCwzZnCoFNrz4n%2FExJSS9bJGTnk5hazmLfVqRxypkKbEx%2FUuKBpb%2FVyPTSsMvqB7pHMlaptfJtOjgHDogOIAh8%5C%5CdwKb5eZcizMuFrt0eNt%2FZ0k2BamUbgE%2BX6MsKE%2Byqr%5C%5CvBTMWoxe2khXsgP2IVzaaiJw6zRcQ2Xa7F9zNQRqgxmcOdT%2FEExql1x0GtiFZ889OCQVvQXSY5c7BerCsbLfcDVf%2FQ2tkOs1ZJzGh%2FyiiY%2Bal6F7pYaUPgwqBAyI%2FIcL%2BvpD4JmxcgAQRqyglfQGBr5mP2lsL%5C%5CN7R1wfbWHKbmxjp1JagxU%2Fwj%5C%5Chk8I1z7cEkygkwJaMsktXc51Z8gMwwnVj5oxysXQow8vM7VAmudC%2BRhlzeNi4WLawa6AVNBaEjKgSWPitTF2Ej7ehm2ieD%2FjemzrwB7F8ez9qEgl9vCjh2qZ5kwzrCpzi%2Ba5xquT4cTnSfvDJ61rYSNB9u%2BxmaHRh8GHlX60VSHT8vXn09OIPf6HrdQbuCLQng1eXc1GR8nUqWAPZB7E6I7cE%2F0qkf6J2250wFBX5YYQfKd0hU7UXhzPtID9rDdWKTOnRh7paiIiQeH9wb7I%2F8nT92FAq%2BOaeoJEMmgweLLMC9DCjV1s55DRLo2bRDibWORjutMgkkI97mkknCUAxP9Y%5C%5C%5C%5C4EGRnlRkMrhEPH9jydxNRRLaPHPyGRVWLKVPXbJY257h%5C%5CNfbGF7o%5C%5Ca0pX4MITuwwX5qojIHU5i%2FtxaEkLd5f%5C%5CB6E%5C%5C0a%2BYE5hXqalmP2vLxXSvx6Id2rDdWnX7ERtAY7v%2FbFqqH4aVJj8PkhIw0SZ2vtTF2An9ZLCbnI4SMkQ7Aq%5C%5ClmgCDKcgqM6IUhdG2225tIrDdhmr7%5C%5CxOE0BVdKbNAhkMRXl6TIvz67DPZ3%22%2C%22m%22%3A%22%22%2C%22p%22%3A%22vcFH9K7I%5C%5C%2BdKLNnZyT%5C%5CXQcc4gqEd72pssbWXzjFBhywxvnvSdkqgXp33%22%2C%22ext%22%3A%22t9hyjeLOLM%2BF47azSHf5cNmHFGzrI9GV%22%7D&width=220&type=2&version=2.11.4&cb=kpTz%5C55I77EvE7PK88JZf0W%5C61IjJ8P6baf2indJhw%2BCo%5CpY%2FGNb4kWfoXWh0Ifx&extraData=9244635%40163.com&runEnv=10&referer=https%3A%2F%2Fdl.reg.163.com%2Fwebzj%2Fv1.0.1%2Fpub%2Findex2_new.html&callback=__JSONP_deqjc4q_1
            作用：提交轨迹数据
            参数: id, token, acToken, data, width, cb, runEnv(10) 
                要注意 width 参数，这是图像的宽度，实际提交的距离要按原图像的宽度除以这个宽度进行计算。

        7. https://dl.reg.163.com/dl/vftcp?un=95632%40163.com&capkey=744e2a6324ec5370616241baf4507538&pd=cc&pkid=PFClpTB&cap=dsPXWoSXXeMr8-C4vB_cFsTQNl0sZzWSI9rXXJ-GgE4mqh05biHK5HtnO-X86-ArkjOgo4pDCi-9czfvmrdY.HmtQkDX_ksM5qmyZIO-i-ArQsx1r-.2Mvo_ys1TVlmC85-PhyOkYvspGvvZQD86bxJXoK6u857tREjBQqCy67OaGD-M4r0tBDpSwQuUuPpm0gk8Vmo1fFJIT1agNk8URFrUATQeLu1gPSi1Adz4hHl6WjZPrJQFRXo9O2QNk-RkwTthTvRCgbR1-n0axDvaEiaqgLfee8Cbu9IbRqYRY2ePwpzDRgHS8CbtIwGr.As6-7ytf6DIZYbuHUqHMRswlLvt.8tSEAfdi5n8u0Jk-x76S.WlEMEeuxTAo_Ec9QAjYpyN8lIdrWPv1k92su2mNNX-B7LEAXCLCWeVKWkEWSZ4GXXp9OO8PpLnh2Vh70jDkrUVh.ABF05DUtVP6wohRHYg-aCOVAksR0RFe9UvraCUM7G8uDlzWCMOe_a3&v=2&channel=0&topURL=http%3A%2F%2Fcc.163.com%2Fcategory%2Flive%2F&rtid=vA6WfICL1sY4S9lNuMnwRXs5TZU5Gmsf&nocache=1570328175262
            滑块是否成功 {ret: "201"} 代表成功

        8. https://dl.reg.163.com/dl/gt?un=qwerrtty%40163.com&pkid=PFClpTB&pd=cc&channel=0&topURL=http%3A%2F%2Fcc.163.com%2Fcategory%2F&rtid=wfewJYJTvsRAM60zqNXzQR3KjJJVIy6K&nocache=1570500368237
            获取 tk 值

    6. 找到涉及的加密参数: id (固定) (744e2a6324ec5370616241baf4507538)

*/


// 易盾的参数  rid 

// lhIJ8/DfJeAx4NasUlxyTydrbMVEZn4eWlEepTDtf8W6twg+adXHm/iuLqKzVPX1
// 登录的参数 rtid pw

console.log(global.Date.now())