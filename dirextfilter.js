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