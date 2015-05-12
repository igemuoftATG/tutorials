var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];

var app = express();

app.get('/books', function(req, res) {
    fs.readFile(fileName, function(err, data) {
        if (err) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
    });
});

app.listen(port);
