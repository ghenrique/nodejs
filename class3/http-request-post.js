'use strict'

// Requiring HTTP and QueryString
const http 		  = require('http'),
	  querystring = require('querystring'); // Parses JSON data in QueryString format

// Defining the information that I will post on the API
const postData = querystring.stringify({
	name: 'Guilherme Henrique',
	type: 'Aluno'
});

// Defining conection options | Setting method "POST" to identify the type of request
const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'POST',
	path: '/api/pokemons',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded', // This Content-Type defines the format that the message body will be sent to server (only for POST methods)
		'Content-Length': postData.length // When posting data to server, we need to specify the data length
	}
};

// Callback function
function callback(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados: ' + data);
	});
}

// Defining the request
const req = http.request(options, callback);

// Checking if error
req.on('error', (e) => {
	console.log('Error: ' + e.message);
});

// Writing data on Server
req.write(postData);

// Finishing request
req.end();