// HTTP FILE SERVER
//  Exercise 11 of 13

// Write an HTTP server that serves the same text file for each request it receives.

// Your server should listen on the port provided by the first argument to your program.

// You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

var fs = require('fs');
var http = require('http');

var port = process.argv[2]; // Assume first argument is the port
var file_path = process.argv[3]; // Assume second argument is the file path

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' });
  var readStream = fs.createReadStream(file_path);
  readStream.pipe(res);
});

server.listen(port);