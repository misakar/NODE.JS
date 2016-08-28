var Readable = require('stream').Readable;
var rs = Readable({ objectMode: True });


var c = 97 - 1;


rs._read = function()
{
    if (c >= 'z'.charCodeAt(0))
        {return rs.push(null);}

    // the setTimeout delay is necessary because the operating
    // system requires some time to send us the relevant signals
    // to close the pipe.
    setTimeout(function () {
        rs.push(String.fromCharCode(++c));
    }, 100);
};


rs.pipe(process.stdout);


// _read() 不断的尝试读取, _read是主动方.
// 而rs.push则是将xxpush到buffer中, read读取是被动方.
process.on('exit', function() {
    // SIGPIPE
    console.error('\n_read() called ' + (c-97) + 'times');
});
// EPIPE
process.stdout.on('error', process.exit);
