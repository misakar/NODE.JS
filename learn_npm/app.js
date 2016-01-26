var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function (req, res) {
    var q = req.query.q; // 获取q参数
    var md5Value = utility.md5(q);

    res.send(md5Value);
});


app.listen(5000, function(req, res) {
    console.log("app is running on port 5000! ");
});

