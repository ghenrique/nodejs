'use strict'

const http 		  = require('http'),
	  querystring = require('querystring');

const newPokemon = querystring.stringify({
	name: 'Pokemon Guilherme',
	type: 'Fire'
});

const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'POST',
	path: '/api/pokemons',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': newPokemon.length
	}
};


function callback(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
 		console.log('Requisição realizada: ' + data);
	});
}


const req = http.request(options, callback);

req.on('error', (e) => {
	console.log('Error: ' + e.message);
});

req.write(newPokemon);

req.end();