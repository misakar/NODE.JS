// a simple node server
var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<strong>Hello world!</strong>');
}).listen(3000);

console.log("HTTP server is running on port 3000 ! ");
