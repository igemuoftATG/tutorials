var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

http.createServer(function(req,res) {
    var parsedUrl = url.parse(req.url, true);
    var pathName = parsedUrl.pathname;
    var isoDate = parsedUrl.query.iso;
    var date = new Date(isoDate);

    if (pathName === '/api/parsetime') { 
        var time = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
    } else if (pathName === '/api/unixtime') {
        var time = {
            "unixtime" : date.getTime()
        };
    } else {
        res.writeHead(404);
        res.end();
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(time));

}).listen(port);
