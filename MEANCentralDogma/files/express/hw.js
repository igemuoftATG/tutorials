var express = require('express');
var app = express();

app.get('/hello', function(req, res){
    res.send('hello w0rlD');
}).get('/goodbye', function(req, res) {
    res.send('gooood bye');
}).listen(3000);
