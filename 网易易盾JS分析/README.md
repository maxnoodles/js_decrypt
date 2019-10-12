## 网易易盾 JS 分析

    以 网易 cc 的登录为入口 http://cc.163.com/category/live/ 右上角登录



### 一. 找到网易滑块相关的 url 

* 1. https://dl.reg.163.com/dl/ini?pd=cc&pkid=PFClpTB&pkht=cc.163.com&channel=0&topURL=http%3A%2F%2Fcc.163.com%2Fcategory%2Flive%2F&rtid=Pv7h7Vt1SxFSOXMDaLvtzcQdXqEB4Tmr&nocache=1570326450700  
  
        >作用: 初始化易盾滑块  
        参数: (参数名，参数)  
        ('pd', 'cc') 网易 cc 的标志,固定  
        ('pkid', 'PFClpTB') 网易 cc 的 id,固定   
        ('pkht', 'cc.163.com') 网易 cc 的 域名,固定  
        ('channel', '0') 固定   
        ('topURL', 'http://cc.163.com/category/') 点击登录的页面,可以固定   
        ('rtid', rtid) rtid, JS 生成
        ('nocache', '1570335112543') 不使用缓存,参数是时间戳。 


    2. https://webzjcaptcha.reg.163.com/api/v2/get?id=744e2a6324ec5370616241baf4507538&fp=xkgWXll%5CCiMCXJfeNAZ5r6wqufPOotJ1KhT7WVB%2FUHtA9q7%2FCHYSLA2ekaE4smQrAkLHux9S8%5CCh7cLlUv5fddky%2FELCShEDKIuQM%2FeYJsRCRtRGdntvV%2BtubW9KZU0aaaV%2Fb74rJ2SsRVJ4YKq9RT20jS7KjU1AVgh0Y3fRlPezE6qd%3A1570327351808&https=true&type=2&version=2.11.4&dpr=1.25&dev=1&cb=xjFA7%5C%5C6JE0yFfEfmt7Xk40JTPxKgT8p%5C5Ap0e2%5CfYUjl7%5C8%5CMscKxDMSicOiafO&ipv6=false&runEnv=10&width=220&token=&referer=https%3A%2F%2Fdl.reg.163.com%2Fwebzj%2Fv1.0.1%2Fpub%2Findex2_new.html&callback=__JSONP_561dkr0_0
        
        > 作用：获取滑块背景图和滑块图片, 还有该次滑动请求的 token  
        > 参数:   
        ('id', '744e2a6324ec5370616241baf4507538') 网易 cc 的请求易盾的 id (固定)  
        ('fp', 'xkgWXll%5CCiMCXJfeNAZ5r6wqufPOotJ1KhT7WVB%2FUHtA9q7%2FCHYSLA2ekaE4smQrAkLHux9S8%5CCh7cLlUv5fddky%2FELCShEDKIuQM%2FeYJsRCRtRGdntvV%2BtubW9KZU0aaaV%2Fb74rJ2SsRVJ4YKq9RT20jS7KjU1AVgh0Y3fRlPezE6qd%3A1570327351808') 指纹算法, JS 生成  
        ('https', 'true') 固定  
        ('type', '2') 固定  
        ('version', '2.11.4') 易盾版本号 (固定)  
        ('dpr', '1.25') 固定  
        ('dev', '1') 固定  
        ('cb', 'xjFA7%5C%5C6JE0yFfEfmt7Xk40JTPxKgT8p%5C5Ap0e2%5CfYUjl7%5C8%5CMscKxDMSicOiafO') JS 生成   
        ('ipv6', 'false') 固定  
        ('runEnv', '10') 固定  
        ('width', '220') 滑块的实际宽度    
        ('token', '') 空值 固定  
        ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html') 固定    
        ('callback','__JSONP_561dkr0_0') 放回 JSON 数据的前缀,可自己随意指定,例如: 'abc' 

        > 重点: fp: 指纹算法，对应 cookies 中的 gdxidpyhxdE  
        特征: 一般指纹算法会取浏览器的一组数据放入一个数组，再用数组的 join 方法拼接，再进入一个摘要算法取一个哈希值。  
        解决方法: 找到 join 的数组，随机改变一些值，例如浏览器版本号，屏幕大小等等。

    3. https://webzjcaptcha.reg.163.com/api/v2/check?id=744e2a6324ec5370616241baf4507538&token=e60692d05e1c47328f77c9f401e65364&acToken=9ca17ae2e6ffcda170e2e6ee8eb6688b88feafb86de9968ea7d44e968f9a84f365b194bcd4ef3aa793998aec2af0feaec3b92ab2b2e188e15f95928b91ee5f969b9fb6d55a8ab1f791ce80b89e8ab0b76295b6ee9e&data=%7B%22d%22%3A%22BfQ1UDLNIcrm1r8cwIu%2FCwzZnCoFNrz4n%2FExJSS9bJGTnk5hazmLfVqRxypkKbEx%2FUuKBpb%2FVyPTSsMvqB7pHMlaptfJtOjgHDogOIAh8%5C%5CdwKb5eZcizMuFrt0eNt%2FZ0k2BamUbgE%2BX6MsKE%2Byqr%5C%5CvBTMWoxe2khXsgP2IVzaaiJw6zRcQ2Xa7F9zNQRqgxmcOdT%2FEExql1x0GtiFZ889OCQVvQXSY5c7BerCsbLfcDVf%2FQ2tkOs1ZJzGh%2FyiiY%2Bal6F7pYaUPgwqBAyI%2FIcL%2BvpD4JmxcgAQRqyglfQGBr5mP2lsL%5C%5CN7R1wfbWHKbmxjp1JagxU%2Fwj%5C%5Chk8I1z7cEkygkwJaMsktXc51Z8gMwwnVj5oxysXQow8vM7VAmudC%2BRhlzeNi4WLawa6AVNBaEjKgSWPitTF2Ej7ehm2ieD%2FjemzrwB7F8ez9qEgl9vCjh2qZ5kwzrCpzi%2Ba5xquT4cTnSfvDJ61rYSNB9u%2BxmaHRh8GHlX60VSHT8vXn09OIPf6HrdQbuCLQng1eXc1GR8nUqWAPZB7E6I7cE%2F0qkf6J2250wFBX5YYQfKd0hU7UXhzPtID9rDdWKTOnRh7paiIiQeH9wb7I%2F8nT92FAq%2BOaeoJEMmgweLLMC9DCjV1s55DRLo2bRDibWORjutMgkkI97mkknCUAxP9Y%5C%5C%5C%5C4EGRnlRkMrhEPH9jydxNRRLaPHPyGRVWLKVPXbJY257h%5C%5CNfbGF7o%5C%5Ca0pX4MITuwwX5qojIHU5i%2FtxaEkLd5f%5C%5CB6E%5C%5C0a%2BYE5hXqalmP2vLxXSvx6Id2rDdWnX7ERtAY7v%2FbFqqH4aVJj8PkhIw0SZ2vtTF2An9ZLCbnI4SMkQ7Aq%5C%5ClmgCDKcgqM6IUhdG2225tIrDdhmr7%5C%5CxOE0BVdKbNAhkMRXl6TIvz67DPZ3%22%2C%22m%22%3A%22%22%2C%22p%22%3A%22vcFH9K7I%5C%5C%2BdKLNnZyT%5C%5CXQcc4gqEd72pssbWXzjFBhywxvnvSdkqgXp33%22%2C%22ext%22%3A%22t9hyjeLOLM%2BF47azSHf5cNmHFGzrI9GV%22%7D&width=220&type=2&version=2.11.4&cb=kpTz%5C55I77EvE7PK88JZf0W%5C61IjJ8P6baf2indJhw%2BCo%5CpY%2FGNb4kWfoXWh0Ifx&extraData=%40163.com&runEnv=10&referer=https%3A%2F%2Fdl.reg.163.com%2Fwebzj%2Fv1.0.1%2Fpub%2Findex2_new.html&callback=__JSONP_deqjc4q_1  
    
        >作用：提交轨迹数据,返回滑动成功的标志  
        >参数: 
        ('id', '744e2a6324ec5370616241baf4507538') 固定  
        ('token', 'e60692d05e1c47328f77c9f401e65364') 链接 2 中返回的 token  
        ('acToken', '9ca17ae2e6ffcda170e2e6ee8eb6688b88feafb86de9968ea7d44e968f9a84f365b194bcd4ef3aa793998aec2af0feaec3b92ab2b2e188e15f95928b91ee5f969b9fb6d55a8ab1f791ce80b89e8ab0b76295b6ee9e') 目前网易无验证这个参数，实测可以携带   
        ('data', '%7B%22d%22%3A%22BfQ1UDLNIcrm1r8cwIu%2FCwzZnCoFNrz4n%2FExJSS9bJGTnk5hazmLfVqRxypkKbEx%2FUuKBpb%2FVyPTSsMvqB7pHMlaptfJtOjgHDogOIAh8%5C%5CdwKb5eZcizMuFrt0eNt%2FZ0k2BamUbgE%2BX6MsKE%2Byqr%5C%5CvBTMWoxe2khXsgP2IVzaaiJw6zRcQ2Xa7F9zNQRqgxmcOdT%2FEExql1x0GtiFZ889OCQVvQXSY5c7BerCsbLfcDVf%2FQ2tkOs1ZJzGh%2FyiiY%2Bal6F7pYaUPgwqBAyI%2FIcL%2BvpD4JmxcgAQRqyglfQGBr5mP2lsL%5C%5CN7R1wfbWHKbmxjp1JagxU%2Fwj%5C%5Chk8I1z7cEkygkwJaMsktXc51Z8gMwwnVj5oxysXQow8vM7VAmudC%2BRhlzeNi4WLawa6AVNBaEjKgSWPitTF2Ej7ehm2ieD%2FjemzrwB7F8ez9qEgl9vCjh2qZ5kwzrCpzi%2Ba5xquT4cTnSfvDJ61rYSNB9u%2BxmaHRh8GHlX60VSHT8vXn09OIPf6HrdQbuCLQng1eXc1GR8nUqWAPZB7E6I7cE%2F0qkf6J2250wFBX5YYQfKd0hU7UXhzPtID9rDdWKTOnRh7paiIiQeH9wb7I%2F8nT92FAq%2BOaeoJEMmgweLLMC9DCjV1s55DRLo2bRDibWORjutMgkkI97mkknCUAxP9Y%5C%5C%5C%5C4EGRnlRkMrhEPH9jydxNRRLaPHPyGRVWLKVPXbJY257h%5C%5CNfbGF7o%5C%5Ca0pX4MITuwwX5qojIHU5i%2FtxaEkLd5f%5C%5CB6E%5C%5C0a%2BYE5hXqalmP2vLxXSvx6Id2rDdWnX7ERtAY7v%2FbFqqH4aVJj8PkhIw0SZ2vtTF2An9ZLCbnI4SMkQ7Aq%5C%5ClmgCDKcgqM6IUhdG2225tIrDdhmr7%5C%5CxOE0BVdKbNAhkMRXl6TIvz67DPZ3%22%2C%22m%22%3A%22%22%2C%22p%22%3A%22vcFH9K7I%5C%5C%2BdKLNnZyT%5C%5CXQcc4gqEd72pssbWXzjFBhywxvnvSdkqgXp33%22%2C%22ext%22%3A%22t9hyjeLOLM%2BF47azSHf5cNmHFGzrI9GV%22%7D') 加密后的轨迹, JS 生成  
        ('width', '220') 滑块图片实际宽度, 固定  
        ('type', '2') 固定   
        ('version', '2.11.4') 固定   
        ('cb', 'kpTz%5C55I77EvE7PK88JZf0W%5C61IjJ8P6baf2indJhw%2BCo%5CpY%2FGNb4kWfoXWh0Ifx') 和链接 2 中的 cb 是同一个算法, 重新生成的 cb  
        ('extraData', '') 这是请求登录对应的网易账号,可使用空值  
        ('runEnv', '10') 固定   
        ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html') 固定   
        ('callback', callback) 放回 JSON 数据的前缀,可自己随意指定,例如: 'abc'  

        > 注意点: width 参数，这是真正的滑块图片宽度,和链接 2 中返回的图片的宽度是不一样的,实际提交的距离要按原图像的宽度除以这个宽度进行计算。

### 二. 找出加密函数的 JS 代码,在本地 node 环境模拟生成。

1. rtid 修改后的 JS 文件 --> my_rtid.js
     
2. cb 修改后的 JS 文件 --> my_cb.js

3. fp 修改后的 JS 文件 --> my_fp.js
   
4. 利用 opencv 识别滑块滑动距离 --> test_resp 中的 findfic 函数。

5. data 生成轨迹和轨迹加密,修改后的 JS 文件 --> my_trace.js



