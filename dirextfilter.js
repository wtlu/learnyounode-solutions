// MAKE IT MODULAR
//  Exercise 6 of 13

// This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.


var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, files) {

		if (err) {
			return callback(err, null);
		}
		// Go through each files look at the extension
		var result = [];
		files.forEach(function(file) {
			var currext = path.extname(file);
			if (currext === '.' + ext) {
				result.push(file);
			}
		});

		// Alt solution using filter
		// list = list.filter(function (file) {
  //         return path.extname(file) === '.' + filterStr
  //   });


		callback(null, result);
	});
}