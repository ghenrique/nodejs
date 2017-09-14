// Get Localhost querystring

'use strict';

// Requiring HTTP
const http = require('http');

// Getting data from server
http.get({ // Setting API informations to consult
	hostname: 'localhost',
	path: '/user?name=Guilherme&ui_developer=true&age=22',
	port: 3000,
	agent: false
}, (response) => { // Defining the response arrow function
	// Declaring an unique variable to receive data informations
	let body = '';

	// Showing status and consulted headers
	console.log('STATUS: ' + response.statusCode);
	console.log('HEADERS: ' + response.headers);

	/*
	* In the function DATA, it attributed the data value into a single variable
	* called "body"
	*/
	response.on('data', function(data) {
		body += data;
	});

	// When there are no more data do retrieve, the function ends showing the body info.
	response.on('end', function() {
		console.log('Resposta: ', body);
	});
});
