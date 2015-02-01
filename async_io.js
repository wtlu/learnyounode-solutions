// MY FIRST ASYNC I/O!
//  Exercise 4 of 13

// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

var fs = require('fs');

var fileName = process.argv[2]; // Assume first argument is always the file path

var result = 0;
if (fileName) {
	var fileBuffer = fs.readFile(fileName, 'utf8', function(err, data) {
		if (!err) {
			var substring = data.split('\n');
			console.log(substring.length - 1);
		}
	});
}