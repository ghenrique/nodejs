'use strict'


/*
	callback(err, result)
*/

function callback (err, result) {
	if ( err ) throw new Error(err);
	
	console.log('Meu nome é', result);
}

function sayName (name, callback) {
	if ( typeof name === 'string' ) return callback(null, name);

	const error = newError('Você precisa passar uma string para "name"');

	callback(err, null);
}

sayName('Guilherme', callback);