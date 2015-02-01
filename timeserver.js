// TIME SERVER
//  Exercise 10 of 13

// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

//     "2013-07-06 17:42"

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2]; // Assume first argument is the port

var server = net.createServer(function (socket) {
  var result = (strftime('%F %R\n'));
  socket.end(result);
});
server.listen(port);