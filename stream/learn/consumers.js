process.stdin.on('readable', function () {
    var buf = process.stdin.read();
    // buf is a dict
    if (buf) {
        for (var i = 0; i < buf.length; i++){
            console.log(String.fromCharCode(buf[i]));
        };
    };
    console.log('\n');
    console.dir(buf);
    console.log('\n');
});
