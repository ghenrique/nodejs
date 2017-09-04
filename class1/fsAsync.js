// Async reading file

'use strict'

// Declares filesystem variable
var filesystem = require('filesystem');

// Using readFile function to display file content. Passing Error and result as Parameters
filesystem.readFile('./index.txt', (err, result) => {
	// Check if error
	if ( err ) {
		console.log( err );
	}

	// Showing file content to String
	console.log( result.toString() );
});