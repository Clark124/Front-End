/**
 * Created by Administrator on 2017/3/31.
 */
var a = 1;
console.log(a);
var sayHello = require("./a").sayHello;
sayHello("Clark");
var marked = require("marked");
var str = marked("# hello");
console.log(str);