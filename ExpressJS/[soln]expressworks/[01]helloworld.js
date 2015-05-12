var express = require('express');
var port = process.argv[2];

var app = express();

app.get('/home', function(req, res) {
    res.end('Hello World!');
}).listen(port);
