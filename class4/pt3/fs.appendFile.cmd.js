'use strict'

// Requiring FS and OS
const fs = require('fs');
const os = require('os');

// Defining file that will be changed and content
const file = process.argv[2] || 'new-example.txt';
let data = process.argv[3] || 'by Guilherme'

// Callback function
const callback = (err) => {
	if (err) throw err

	console.log('Adding new content!');
}

// Adding an End Of Line break + data value
data = os.EOL + data;

// Async function
fs.appendFile(file, data, callback);

// End
console.log('End of execution');