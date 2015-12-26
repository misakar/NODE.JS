// 一个Readable流

var Readable = require('stream').Readable;


var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);


rs.pipe(process.stdout);
