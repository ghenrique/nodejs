'use strict'

let https = require('https');

// Setting JSON with API infos
const options = {
	host: 'www.googleapis.com',
	path: '/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyArbzYVyBL147P0cK7XwRZJ3yn5DLcQeH4&part=contentDetails'
};

// Callback function
function callback(res) {
	// Showing status
	console.log('STATUS: ' + res.statusCode);

	// Define a empty variable to attribute all the chunks
	let data = '';

	// Setting encode to UTF-8
	res.setEncoding('utf8');

	// Receiving all the chunk and adding to the variable "data"
	res.on('data', (chunk) => {
		data += chunk;
	});

	// When there are no more data to retrieve, show the result
	res.on('end', () => {
		console.log('Dados finalizados:', data);
	});
}

// HTTP request function
const req = https.request(options, callback);

// Checking if there are errors
req.on('error', (e) => {
	console.log('Error: ' + e.message);
});

// Ending request
req.end();