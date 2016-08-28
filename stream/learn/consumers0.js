process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);  // only read 3 bytes
    console.dir(buf);
    process.stdin.read(0);
});
