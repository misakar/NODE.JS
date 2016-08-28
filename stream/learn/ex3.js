var http = require('http')
var fs = require('fs')
var oppressor = require('oppressor')


var server = http.createServer(function (req, res)
{
	var stream = fs.createReadStream(__dirname, '/data.txt');
	// pipe is awesome! just like unix pipe |
	// you can connect simple module together
	stream.pipe(oppressor(req)).pipe(res);
});