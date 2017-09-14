'use strict'

// Requiring FS
const fs = require('fs');

// Defining file that will be changed and content
const file = 'example.txt';
const data = '\nby Guilherme';

// Callback function
const callback = (err) => {
	if (err) throw err

	console.log('Adding new content!');
}

// Async function
fs.appendFile(file, data, callback);

// End
console.log('End of execution');