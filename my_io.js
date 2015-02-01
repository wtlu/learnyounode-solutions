// Exercise 3 of 13

// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

var fs = require('fs');

var fileName = process.argv[2]; // Assume first argument is always the file path

var result = 0;
if (fileName) {
	var fileBuffer = fs.readFileSync(fileName);
	var buffStr = fileBuffer.toString();
	//console.log(buffStr);
	var substring = buffStr.split('\n');
	//console.log(substring);
	result += substring.length - 1;
}

console.log(result);