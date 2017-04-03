/**
 * Created by Administrator on 2017/3/31.
 */


//CMD
//define(function(require,exports,module){
//    var $ = require('jquery');
//    var GoTop = require('com/gotop');
//    new GoTop;
//});


//AMD
//
//define(['jquery','com/gotop','com/carousel','com/loadmore'],function($,GoTop,Carousel,LoadMore){
//     new GoTop();
//    Carousel.init($(".carousel"));
//    LoadMore.init($(".waterfall-ct"))
//});
var  $ = require('jquery');
var GoTop = require('../com/gotop.js');
var Carousel = require('../com/carousel.js');
var LoadMore = require('../com/loadmore.js');
new GoTop();
Carousel.init($(".carousel"));
LoadMore.init($(".waterfall-ct"));
