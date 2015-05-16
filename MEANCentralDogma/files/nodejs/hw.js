var http = require('http');
var url = require('url');
var port = process.argv[2];

http.createServer(function(request, response){
    var pn = url.parse(request.url, true).pathname;
    var greeting = { from: 'me', to: 'you', message: '' };

    if (pn === '/hello') greeting.message = 'hello world!';
    else if (pn === '/bye') greeting.message = 'goodbye';

    response.end(JSON.stringify(greeting));
}).listen(port);
