# ExpressJS Basics

Some basics taken from the 'Getting Started' section on the [ExpressJS site](http://expressjs.com/starter/hello-world.html)

### Hello world
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
```

> The req (request) and res (response) are the exact same objects that Node provides, so you can invoke req.pipe(), req.on('data', callback) and anything else you would do without Express involved.

The app starts a server and listens on port 3000 for connection. It will respond with "Hello World!" for requests to the homepage. For every other path, it will respond with a 404 Not Found.

Save the code in a file named `app.js` and run it with the following command.

```
$ node app.js
```

Then, load [http://localhost:3000/](http://localhost:3000/) in a browser to see the output.

### Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which is / are executed when the route is matched.

Route definition takes the following structure `app.METHOD(PATH, HANDLER)`, where `app` is an instance of express, `METHOD` is an HTTP request method, `PATH` is a path on the server, and `HANDLER` is the function executed when the route is matched.

```
// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```