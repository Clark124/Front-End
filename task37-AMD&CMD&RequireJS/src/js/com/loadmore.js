/**
 * Created by Administrator on 2017/3/31.
 */

define(function(require){

    var $ = require("jquery");
    var LoadMore = (function(){
        function Waterfall(ct){
            this.$ct = $(ct);
            this.init();
            this.bind();
            this.getNews();
        }
        Waterfall.prototype = {
             init: function(){
                 this.perPageCount = 9;
                 this.curPage = 1;

                 this.$item = $(".item");
                 this.$btn = $(".btn-loadMore");
                 this.$waterfallCt = $(".waterfall-ct");
                 this.$newCt = $(".news-ct");
                 this.isNewsArrive = true;
                 this.isOver = false;

                 this.colLength = parseInt(this.$waterfallCt.width()/this.$item.width());
                 this.arr = [];
                 for(var i=0;i<this.colLength;i++){
                     this.arr[i] = 0;
                 }
             },

            getNews: function(){
                var _this = this;
                if(this.isNewsArrive === false || this.isOver===true){
                    return;
                }
                this.isNewsArrive =false;
                $.ajax({
                    url: 'https://platform.sina.com.cn/slide/album_tech',
                    dataType: 'jsonp',
                    jsonp:"jsoncallback",
                    data: {
                        app_key: '1271687855',
                        num: _this.perPageCount,
                        page: _this.curPage
                    }
                }).done(function(ret){
                    if(ret && ret.status && ret.status.code === "0"){
                        _this.getNodes(ret.data);
                        _this.curPage++;
                        _this.isNewsArrive = true;
                    }else{
                        console.log('get error data');
                    }
                });
            },

            getNodes: function(newsList){
                var _this = this;
                if(newsList.length===0){
                    this.isOver = true;
                    this.$newCt.append("<p>没有更多数据了</p>");
                    return;
                }
                $.each(newsList,function(idx, news) {
                    var html = "";
                    html += "<li class='item' style='display: none'>";
                    html += "<a href='" + news.url + "'>";
                    html += "<img src='" + news.img_url + "' />";
                    html += "<h4>" + news.short_name + "</h4>";
                    html += "<p>" + news.short_intro + "</p>";
                    html += "</a>";
                    html += "</li>";
                    var $node = $(html);
                    $node.find("img").on("load", function () {
                        _this.$newCt.append($node);
                        _this.waterfall($node);
                        $node.fadeIn(1000);
                    })
                })
            },

            waterfall:function($node){
                var minValue = Math.min.apply(null,this.arr);
                var minIndex = this.arr.indexOf(minValue);
                $node.css({
                    top: this.arr[minIndex],
                    left: $node.outerWidth(true)*minIndex

                });
                this.arr[minIndex] += $node.outerHeight(true);
                var maxValue = Math.max.apply(null,this.arr);
                this.$waterfallCt.height(maxValue+this.$btn.outerHeight(true));
                this.$newCt.height(maxValue);

            },

//            isVisible:function($node){
//                var windowHeight = $(window).height(),
//                    scrollTop = $(window).scrollTop(),
//                    offsetTop = $node.offset().top,
//                    nodeHeight = $node.outerHeight();
//                if(windowHeight+scrollTop>offsetTop && scrollTop<offsetTop+nodeHeight){
//                    return true;
//                }else{
//                    return false;
//                }
//            },
            bind:function(){
                var _this = this;
                this.$btn.on("click",function(){
                    if(!_this.isNewsArrive) return;
                        _this.getNews();
                        console.log(1)
                });
            }

        };

        return {
            init:function($ct){
                new Waterfall($ct)
            }
        }
    })();
    return LoadMore;

})
