var my_rid = function() {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      , t = 32
      , i = [];
    for (; t-- > 0; )
        i[t] = e.charAt(Math.random() * e.length);
    return i.join("")
};
console.log(my_rid())
