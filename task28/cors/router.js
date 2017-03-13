
app.get('/getNewsJsonp', function(req, res) {
	var news = [
        "调查：超70%网友认为现金已不是生活必需品",
        "醉汉连踹11车还打伤车主 事后辩称自己失忆",
        "村庄猪圈将改成民宿？项目方：因异味影响村民",
        "20人卖出10万斤病死猪肉 消委会向其索千万赔偿金",
        "范冰冰霸气回应整容 网友：整不整都救不了演技",
        "英达谈巴图：如果允许投入感情 对俩儿子是一样的",
        "徐若瑄晒合影为妈妈庆生 徐妈妈超年轻完全不像61岁",
        "离婚后还照顾前妻的4大男星 与王宝强高下立判",
        "贝克汉姆家的七公主为外婆庆生 送了份这样的礼物…",
        "娱乐圈死后最让人惋惜的八大明星 第一竟是他"
    ];
    var data = [];
    for(var i = 0; i < 3; i++ ){
        var index = parseInt(Math.random()*news.length);
        data.push(news[index]);
        news.splice(index,1)
    }
    var cb = req.query.callback;
    if(cb){
        res.send(cb+"("+JSON.stringify(data)+")")
    }else{
        res.send(data)
    }

});

app.get('/getNewsCors', function(req, res) {
    var news = [
        "调查：超70%网友认为现金已不是生活必需品",
        "醉汉连踹11车还打伤车主 事后辩称自己失忆",
        "村庄猪圈将改成民宿？项目方：因异味影响村民",
        "20人卖出10万斤病死猪肉 消委会向其索千万赔偿金",
        "范冰冰霸气回应整容 网友：整不整都救不了演技",
        "英达谈巴图：如果允许投入感情 对俩儿子是一样的",
        "徐若瑄晒合影为妈妈庆生 徐妈妈超年轻完全不像61岁",
        "离婚后还照顾前妻的4大男星 与王宝强高下立判",
        "贝克汉姆家的七公主为外婆庆生 送了份这样的礼物…",
        "娱乐圈死后最让人惋惜的八大明星 第一竟是他"
    ];
    var data = [];
    for(var i = 0; i < 3; i++ ){
        var index = parseInt(Math.random()*news.length);
        data.push(news[index]);
        news.splice(index,1)
    }
    res.header("Access-Control-Allow-Origin","http://www.a.clark.com:8080");
    res.send(data)


});

