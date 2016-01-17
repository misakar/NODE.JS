//  test dnode
//  node is cool

var dnode = require('dnode')

var server = dnode({
    zing : function (n, cb) {cb(n * 100)}
});

server.listen(5000)

// how dnode work ?
