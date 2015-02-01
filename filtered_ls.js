// Exercise 5 of 13

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

// The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

var fs = require('fs');
var path = require('path');

var dirpath = process.argv[2]; // Assume first argument is always the dir path
var fileext = '.' + process.argv[3]; // Assume second argument is the file extension

var files = fs.readdir(dirpath, function(err, files) {
	// Go through each files look at the extension
	var result = [];
	for (var i = 0; i < files.length; i++) {
		var ext = path.extname(files[i]);
		if (ext === fileext) {
			console.log(files[i]);
		}
	}
});
