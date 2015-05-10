var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2,5);

var urlData = new Array();

function getURL(url, num) {
    http.get(url, function(response) {
        response.pipe(bl(function(err,data) {
            if (err) return console.error(err);

            urlData.push({
                'num': num, 
                'data': data.toString()
            });
            after();
        }));
    });
}

function after() {
    if (urlData.length != urls.length) return;
 
    for (var i=0; i < urls.length; i++) {
        urlData.forEach(function(urlData) {
            if (urlData.num == i)
                console.log(urlData.data);
        });
    }
}

for (var i=0; i < urls.length; i++) {
    getURL(urls[i], i);
}

// Official solution
/*
var http = require('http')
   var bl = require('bl')
   var results = []
   var count = 0
   
   function printResults () {
     for (var i = 0; i < 3; i++)
       console.log(results[i])
   }
   
   function httpGet (index) {
     http.get(process.argv[2 + index], function (response) {
       response.pipe(bl(function (err, data) {
         if (err)
           return console.error(err)
   
         results[index] = data.toString()
         count++
   
         if (count == 3)
           printResults()
       }))
     })
   }
   
   for (var i = 0; i < 3; i++)
     httpGet(i)
*/
