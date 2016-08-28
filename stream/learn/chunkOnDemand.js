var Readable = require('stream').Readable;
var rs = Readable();


var c = 97;
// _read: push chunks on-demand
// so, use _read, push is not in buffer but
// when the consumer what to read them
rs._read = function()
{
	rs.push(String.fromCharCode(c++));
	if (c > 'z'.charCodeAt(0))
		{rs.push(null);}
};


rs.pipe(process.stdout);
