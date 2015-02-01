//  JUGGLING ASYNC
//  Exercise 9 of 13

// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http');
var bl = require('bl')

var urls = [];
for (var i = 2; i < process.argv.length; i++) {
	urls.push(process.argv[i]);
};
var processed_urls = [];
var processed_count = 0;

for (var i = 0; i < urls.length; i++) {
	get_data_from_url_at(i);
};

function get_data_from_url_at (index) {
	http.get(urls[index], function(response) {
	    response.pipe(bl(function (err, data) {
	    	if (err) {
	    		return console.error(err);
	    	}
	    	var resultStr = data.toString();
	    	processed_urls[index] = (resultStr);
	    	processed_count++;
	    	print_all_results();
	    }));

	});
}

function print_all_results () {
	// Check if we have all data
	if (processed_count === urls.length) {
		for (var i = 0; i < processed_urls.length; i++) {
			console.log(processed_urls[i]);
		};
	};
}