// hello from express

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello Express!");
});

app.listen(5000, function () {
    console.log("app is listening on port 5000!");
});
