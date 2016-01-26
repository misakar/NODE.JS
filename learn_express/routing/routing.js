// 路由的简单示例
// app METHOD PATH handler
var express = require('express');
app = express();

// get
app.get('/', function (req, res) {
    res.send("hello routing");
});

// post
app.post('/user', function (req, res) {
    res.send('post to /user');
});

// delete
app.delete('/node', function (req, res) {
    res.send('got a delete request on /node');
});

// app.all() ==> 加载中间件, 不映射到具体的http方法
app.all('/secret', function (req, res, next) {
    console.log("Accessing the secret section");
    next(); // pass control to next handler
});


