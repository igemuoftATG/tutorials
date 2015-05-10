var net = require('net');
var port = process.argv[2];

// "YYYY-MM-DD hh:mm"

net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    var day = date.getDate();
    if (day < 10) day = '0' + day;
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + mins;

    socket.write(formattedDate);
    socket.end('\r\n');
}).listen(port);

// Official solution
/*
var net = require('net')
    
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}
    
function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/
