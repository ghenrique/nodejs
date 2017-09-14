'use strict'

const http = require('http');

const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'DELETE',
	path: '/api/pokemons/59b428836f932500123990a9',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};


function callback(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
}


const req = http.request(options, callback);

req.on('error', (e) => {
	console.log('Error: ' + e.message);
});

req.end();