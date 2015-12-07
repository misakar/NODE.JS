// num.js: Node 随机数生成器

// modules
var http = require('http');
var url = require('url');


http.createServer(function(req, res){
    // 创建一个简单的服务器
    // function 是一个回调函数
    // 会自动将处理request并将response发还给服务器
    res.writeHead(200, {'Content-type' : 'text/plain'});
    // url prase function 将请求url的查询参数转化为键值对
    var params = url.parse(req.url, true).query;
    var input = params.number;
    // js 创建随机数程序
    var numInput = new Number(input);
    var numOutput = new Number(Math.random() * numInput).toFixed(0);
    // return response
    res.write(numOutput);
    // end
    res.end();
}).listen(3000);


// start up
console.log("Node Random Num Generater is Running!");
