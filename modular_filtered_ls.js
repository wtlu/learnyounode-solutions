var dirextfilter = require('./dirextfilter');

var dirpath = process.argv[2]; // Assume first argument is always the dir path
var fileext = process.argv[3]; // Assume second argument is the file extension

dirextfilter(dirpath, fileext, function(err, data) {

	data.forEach(function(file) {
		console.log(file);
	});

});