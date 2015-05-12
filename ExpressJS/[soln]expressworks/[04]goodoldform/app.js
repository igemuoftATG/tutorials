var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var port = process.argv[2];

var app = express();

// not necessary to pass challenge but enables local testing
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    //console.log(req.body.str.split('').reverse().join(''));
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);
