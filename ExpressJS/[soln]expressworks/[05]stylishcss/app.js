var express = require('express');
var path = require('path');
var port = process.argv[2];

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('stylus').middleware(__dirname + '/public'));

app.listen(port);
