

app.get('/loadMore', function(req, res){
    var curIdx = req.query.index;
    var len = req.query.length;
    var data = [];
    for(var i=0;i<len;i++){
        data.push("内容"+(parseInt(curIdx)+i))
    }
    setTimeout(function(){
        res.send(data)
    },300)


});

app.get("/getWeather",function(req,res){
    var data = {"error":0,
                "status":"success",
                "date":"2017-03-18",
                "results":
                    [{"currentCity":"上海",
                     "pm25":"120",
                     "index":[{"title":"穿衣",
                                "zs":"较冷",
                                "tipt":"穿衣指数",
                                "des":"建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。"},
                              {"title":"洗车",
                                  "zs":"不宜",
                                  "tipt":"洗车指数","des":"不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。"},
                              {"title":"旅游",
                                  "zs":"适宜",
                                  "tipt":"旅游指数",
                                  "des":"温度适宜，又有较弱降水和微风作伴，会给您的旅行带来意想不到的景象，适宜旅游，可不要错过机会呦！"},
                              {"title":"感冒",
                                  "zs":"较易发",
                                  "tipt":"感冒指数",
                                  "des":"昼夜温差较大，较易发生感冒，请适当增减衣服。体质较弱的朋友请注意防护。"},
                              {"title":"运动",
                                  "zs":"较不宜",
                                  "tipt":"运动指数",
                                  "des":"有降水，推荐您在室内进行健身休闲运动；若坚持户外运动，须注意保暖并携带雨具。"},
                              {"title":"紫外线强度",
                                  "zs":"最弱",
                                  "tipt":"紫外线强度指数",
                                  "des":"属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"}],
                     "weather_data":[{"date":"周六 03月18日 (实时：14℃)",
                                      "dayPictureUrl":"http://api.map.baidu.com/images/weather/day/xiaoyu.png",
                                      "nightPictureUrl":"http://api.map.baidu.com/images/weather/night/yin.png",
                                      "weather":"小雨转阴",
                                      "wind":"微风",
                                      "temperature":"15 ~ 8℃"},
                                     {"date":"周日",
                                      "dayPictureUrl":"http://api.map.baidu.com/images/weather/day/xiaoyu.png",
                                      "nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png",
                                      "weather":"小雨",
                                      "wind":"微风",
                                      "temperature":"13 ~ 10℃"},
                                     {"date":"周一",
                                      "dayPictureUrl":"http://api.map.baidu.com/images/weather/day/xiaoyu.png",
                                      "nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png",
                                      "weather":"小雨",
                                         "wind":"微风",
                                      "temperature":"14 ~ 7℃"},
                                     {"date":"周二",
                                      "dayPictureUrl":"http://api.map.baidu.com/images/weather/day/duoyun.png",
                                      "nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png",
                                      "weather":"多云转小雨",
                                      "wind":"微风",
                                      "temperature":"13 ~ 7℃"}
                                     ]
                    }]};
    res.send(data)

});