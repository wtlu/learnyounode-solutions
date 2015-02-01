// HTTP CLIENT
//  Exercise 7 of 13

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require('http');

var url = process.argv[2]; // Assume first argument is always the durl

http.get(url, function(response) {
    response.setEncoding('utf8');

    // If we're just calling one method, no
    // need to write the whole function stub
    reponse.on('data', console.log);
    response.on('error',console.error);
});