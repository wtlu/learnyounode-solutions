// HTTP JSON API SERVER
//  Exercise 13 of 13

// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

// For example:

//   /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }

// Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

//     { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to your program.

var http = require('http');
var url = require('url');

var port = process.argv[2]; // Assume first argument is the port

function parsetime (time) {
	var result = {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}

	return result;
}

function unixtime (time) {
	var result = {
		unixtime: time.getTime()
	}

	return result;
}

var server = http.createServer(function (req, res) {
	if (req.method != 'GET') {
		return res.end('send me a GET\n');
	}

	// Now route the url
	var result = null;

	var urlOptions = url.parse(req.url, true);
	var time = new Date(urlOptions.query['iso']);

	if (urlOptions.pathname === '/api/unixtime') {
		// return unix time
		result = unixtime(time);
	} else if (urlOptions.pathname === '/api/parsetime') {
		// parse the time given
		var iso = urlOptions.query['iso'];
		result = parsetime(time);
	} else {
		// Unknown url, return 404
		res.writeHead(404);
		res.end();
	}

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));

});

server.listen(port);
