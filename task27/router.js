/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/login', function(req, res){
    if(req.query.username === "clark"&& req.query.password ==='123'){
        res.send({
            status: 0,
            msg: '登录成功'
        })
    }else{
        res.send({
            status: 1,
            msg: "用户名或密码错误"
        })
    }
});

app.get('/getNews', function(req, res){
    var curIdx = req.query.index;
    var len = req.query.length;
    var data = [];
    for(var i=0;i<len;i++){
        data.push("内容"+(parseInt(curIdx)+i))
    }
    res.header("Access-Control-Allow-Origin","http://localhost:63342");

        res.send(data)

});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});