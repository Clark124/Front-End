/**
 * Created by Administrator on 2017/3/31.
 */

    var $ = require("jquery");

    function GoTop(){
        this.$target = $("<button id='btn-gotop' style='position: fixed;padding: 10px;border-radius: 5px;bottom: 100px;right: 50px;display: none'>回到顶部</button>");
        this.createNode();
        this.bindEvent();
    }
    GoTop.prototype = {
        createNode:function(){
            $("body").append(this.$target);
            if($(window).scrollTop()>500){
                this.$target.show();
            }
        },
        bindEvent:function(){
            var _this = this;
            $(window).on("scroll",function(){
                if($(window).scrollTop()>500){
                    _this.$target.show()
                }else{
                    _this.$target.hide()
                }
            });
            this.$target.on("click",function(){
                $(window).scrollTop(0);
            });
        }
    };
    module.exports =  GoTop;


