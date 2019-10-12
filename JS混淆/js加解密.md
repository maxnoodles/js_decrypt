## JS 加解密

ctypto-js github地址 :  https://github.com/brix/crypto-js

### 1. 编码

* unicode 编码: escape  unescape  
 
* URL 编码: encodeURIComponent  decodeURIComponent  
* Base64/btoa/atob 编码: 所有的数据都能被编码为只用 65 个字符就能表示的文本。 A-Za-z0-9+/=


### 2. 单向散列函数(消息摘要算法)

* 加密后的密文定长  

*  明文不一样，散列后结果一定不一样
*  不可逆
*  一般用于签名 sign

常见的函数有: MD5(解密后密文32位), SHA1(40位), SHA256, SHA512, HmacMD5, HmacSHA1, HmacSHA256  
