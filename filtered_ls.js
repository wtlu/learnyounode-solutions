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
