var http = require('http')
var fs = require('fs')


var server = http.crateServer(function (req, res)
{
	// use stream and pipe
	// so, it will be chunk...
	// just like flask video stream
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(res);
});
server.listen(8000)

/*
data.txt can be log.
I can use websocket to transform res stream to client.. for realtime
and easy to expend.
*/