var http = require('http');

var url = process.argv[2]; // Assume first argument is always the durl

http.get(url, function(response) {
    response.setEncoding('utf8');

    // If we're just calling one method, no
    // need to write the whole function stub
    reponse.on('data', console.log);
    response.on('error',console.error);
});