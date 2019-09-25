
// 第一种
var md5 = function(){
    function aFun(){
        console.log('a');
    }
    function bFun(){
        console.log('b');
    }
    function cFun(){
        console.log('c');
    }
    return {
        a: aFun,
        b: bFun,
        c: cFun
    }
}()
md5.a();
md5.b();

// 第二种
object = {};
(function(){
    function aFun(){
        console.log('a');
    }
    function bFun(){
        console.log('b');
    }
    function cFun(){
        console.log('c');
    }
    object.a = aFun,
    object.b =  bFun,
    object.c = cFun
})()
object.a();
object.b();

// arguments
function test(){
    console.log(arguments.length)
};

test(4, 5, 6);