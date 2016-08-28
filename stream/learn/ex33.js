var http = require('http');
var fs = require('fs');
var oppressor = require('oppressor');


var server = http.createServer(function (req, res)
{
	fs.createReadStream(__dirname, '/data.txt')
		.pipe(oppressor(req))
		.pipe(res)
	;
});
server.listen(8000)
