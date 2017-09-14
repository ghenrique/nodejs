'use strict'

// Requiring HTTP | Changed to HTTPS because de RedTube API changed its certifications
let https = require('https');

// Setting JSON with API infos
const options = {
	host: 'api.redtube.com',
	path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};

// Callback function
function callback(res) {
	// Showing status
	console.log('STATUS: ' + res.statusCode);
	// Printing header infos | using stringify to transform JSON in string
	console.log('HEADERS: ', + JSON.stringify(res.headers));

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