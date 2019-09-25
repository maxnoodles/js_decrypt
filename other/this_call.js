var a = 1000;
console.log(this.a);

var obj1 = {
    a : 30,
    y : function(){
        console.log(this.a);
    }
}
obj1.y(); // 30

var obj2 = {
    a : 40,
    y : function(){
        console.log(this.a);
    }
}


function test(c, d){
    console.log(c+d)
    console.log(this.a)
}

// call 可以改变 this 的指向，把函数临时作为 对象的属性进行调用
// 第一参数是对象 后面是函数的形参
test.call(obj2, 1, 2) //  40

// apply()把参数打包成Array再传入；
// call()把参数按顺序传入。
test.apply(obj2, [1, 2])
