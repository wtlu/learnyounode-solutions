// MAKE IT MODULAR
//  Exercise 6 of 13

// This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.


var dirextfilter = require('./dirextfilter');

var dirpath = process.argv[2]; // Assume first argument is always the dir path
var fileext = process.argv[3]; // Assume second argument is the file extension

dirextfilter(dirpath, fileext, function(err, data) {

	data.forEach(function(file) {
		console.log(file);
	});

});