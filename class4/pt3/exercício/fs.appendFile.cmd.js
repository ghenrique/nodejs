'use strict'

// Requiring FS and OS
const fs = require('fs'),
	  os = require('os');

// Callback function
const callback = (err) => {
	if (err) throw err

	console.log('Adding new content!');
}

function writeFiles() {

	// Defining folder that will have its content changed
	const folder = process.argv[2];

	// Checking if folder existes
	fs.stat(folder + '/', function (err, stats) {
		// Returning error in case folder not exists
		if ( err ) {
			console.log('Folder not found');
		} else {
			// Defining data that will be given by command. If not, use default value
			let data = process.argv[3] || 'by Guilherme',
				filesInFolder = fs.readdirSync(folder); // Reading folder directory and creating array with files

			// Adding an End Of Line break + data value
			data = os.EOL + data;

			// Going through filesInFolder length
			for ( var i = filesInFolder.length - 1; i > 0; i-- ) {
				// Defining file
				let file = folder + '/' + filesInFolder[i];
				
				// Async function for append content to defined file
				fs.appendFile(file, data, callback);
			}
		}

	});

}

// writingFiles
writeFiles();

// End
console.log('End of execution');