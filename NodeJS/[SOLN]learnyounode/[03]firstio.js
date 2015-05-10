// file system module
var fs = require('fs');

// fs.readFileSync(file) returns a Buffer object
//var buf = fs.readFileSync('./test.txt');
var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var newlineCount = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === '\n')
        newlineCount += 1;
}

console.log(newlineCount);

// Alternate solution 
/*

var fs = require('fs')
    
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

*/
