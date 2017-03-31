/**
 * Created by Administrator on 2017/3/31.
 */

define(function(require){
    var $ = require("jquery");
    var Carousel = (function(){
        function _Carousel(ct){
            this.$ct = $(ct);
            this.init();
            this.bind();
            this.playAuto()
        }
        _Carousel.prototype.init = function(){
            var $imgCt = this.$imgCt = this.$ct.find(".img-ct");
            var $preBtn = this.$preBtn = this.$ct.find(".btn-pre");
            var $nextBtn = this.$nextBtn = this.$ct.find(".btn-next");
            var $switch = this.$switch = this.$ct.find(".switch");

            var $firstImg = $imgCt.children().first(),
                $lastImg = $imgCt.children().last();
            var imgWidth = this.imgWidth = $firstImg.width();
            this.currPageIndex = 0;
            this.imgLength = $imgCt.children().length;
            $imgCt.append($firstImg.clone());
            $imgCt.prepend($lastImg.clone());
            $imgCt.width(imgWidth*$imgCt.children().length);
            $imgCt.css({left:-imgWidth});
            this.isAnimate = false;
        };
        _Carousel.prototype.bind = function(){
            var _this = this;
            this.$nextBtn.on("click",function(e){
                e.preventDefault();
                _this.playNext()
            });
            this.$preBtn.on("click",function(e){
                e.preventDefault();
                _this.playPre()
            });
            this.$ct.on("mouseenter",function(){
                _this.playStop();
            });
            this.$ct.on("mouseleave",function(){
                _this.playAuto();
            });

            this.$switch.on("click","li",function(){
                if(_this.isAnimate === true){
                    return
                }
                _this.isAnimate = true;
                $(this).addClass("active").siblings().removeClass("active");
                var n = $(this).index();
                _this.currPageIndex = n;
                _this.$imgCt.animate({
                    left:-_this.imgWidth*(n+1)
                },function(){
                    _this.isAnimate = false;
                });
            });
        };

        _Carousel.prototype.playNext = function(){
            var  _this = this;
            if(this.isAnimate === true){
                return
            }
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '-='+this.imgWidth
            },function(){
                _this.currPageIndex++;

                if(_this.currPageIndex === _this.imgLength){
                    _this.$imgCt.css({left:-_this.imgWidth});
                    _this.currPageIndex = 0;
                }
                _this.$switch.children().removeClass("active").eq(_this.currPageIndex).addClass("active");
                _this.isAnimate = false;
            })
        };
        _Carousel.prototype.playPre = function(){
            var  _this = this;
            if(this.isAnimate === true){
                return
            }
            this.isAnimate = true;
            this.$imgCt.animate({
                left:"+="+this.imgWidth
            },function(){
                _this.currPageIndex--;
                if(_this.currPageIndex < 0){
                    _this.$imgCt.css({left:-_this.imgWidth*_this.imgLength});
                    _this.currPageIndex = _this.imgLength-1;
                }
                _this.$switch.children().removeClass("active").eq(_this.currPageIndex).addClass("active");
                _this.isAnimate = false;
            })
        };
        _Carousel.prototype.playAuto = function(){
            var _this = this;
           this.animating = setInterval(function(){
                _this.playNext()
            },5000);
        };
        _Carousel.prototype.playStop = function(){
            var _this = this;
            clearInterval(_this.animating)

        };


        return {
            init: function($ct){
                $ct.each(function(){
                    new _Carousel($(this))
                })
            }
        }
    })();
    return Carousel;
});

