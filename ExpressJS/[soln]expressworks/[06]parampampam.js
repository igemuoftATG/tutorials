var express = require('express');
var crypto = require('crypto');
var port = process.argv[2];

var app = express();

app.put('/message/:id', function(req, res) {
    var id = req.params.id;

    var shasum = crypto.createHash('sha1');
    shasum.update(new Date().toDateString() + id);
    
    res.end(shasum.digest('hex'));

    // Or you can do..
    /*
    var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.send(str)
    */
});

app.listen(port);
