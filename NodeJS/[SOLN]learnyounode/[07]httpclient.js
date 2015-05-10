var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
    // response is a Node Stream object -> treat as object that emit events
    
    // avoid having to toString() the Buffer object
    response.setEncoding('utf8');

    response.on('error', function(err) {
        console.log("Got error: " + err.message);
    });
    
    // 'data' event is emitted when a chunk of data is available and can be
    // processed. The size of the chunk depends upon the underlying data source.
    response.on('data', function(data) {
        // compute with data
        console.log(data);
    });

    response.on('end', function(end) {
        // end of stream
    });
});


// Official solution
/*
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
*/
