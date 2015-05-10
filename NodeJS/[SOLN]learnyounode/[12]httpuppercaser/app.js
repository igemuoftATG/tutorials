var http = require('http');
var map = require('through2-map');
var port = Number(process.argv[2]);

http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('send me a POST\n')

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(port);
