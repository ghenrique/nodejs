'use strict'

// Requiring "fs"
const fs = require('fs'),
	  data = 'Exercise text';
	  

// Creating callback with error
const callback = (err) => {
	if (err) throw err
	console.log('Saved Async');
}

function setArgument() {
	let argument = 2;

	for ( var i = process.argv.length; i > 2; i--) {
		
		let file = process.argv[argument];

		fs.writeFile(file, data, callback);

		argument += 1;
	}
}

setArgument();