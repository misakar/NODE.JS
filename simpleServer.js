// a node.js example

var http = require('http');  // add the http module
var myServer = http.createServer(function(request, response){
    // 2.编写回调函数
    // function 是一个回调函数
    response.writeHead(
        200,
        {'Content-Type' : 'text/html'}
    );
    response.write('<h1>Hello Node.js</h1>');
    response.end();
});  // simple create a server!

myServer.listen(3000);  // 1.监听事件

// just like python
// so it is a simple sever in node
// we should understand what is
//      envent driven
//      non blocking
// node 作为一个事件驱动的程序(解释器),编程者要做的绝大多数事就是
// 监听事件、编写回调函数
