'use strict'

// Requiring "fs" and defining which file we will create and the content of the file
const fs = require('fs'),
	  file = process.argv[2] || 'studying.txt', // process.argv determines that my creating file will be the 2/3 argument passed by command line
	  data = process.argv[3] || 'Studying Text', // Ex: node fs.writeFile.js 'studying-2.txt' 'Saving by CommandLine'
	  encoding = 'utf8';

// Creating callback with error
const callback = (err) => {
	if (err) throw err
	console.log('Saved Async');
}

// Async
fs.writeFile(file, data, callback); // Not passing the encoding because utf8 is the default encoding

// Sync
// fs.writeFileSync(file, data);
// console.log('Saved Sync');

console.log('End of execution');