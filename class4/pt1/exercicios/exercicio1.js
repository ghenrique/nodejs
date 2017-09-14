'use strict'

// Callback function
function callback(err, result) {
	// Check if there are errors
	if (err) throw new Error(err);

	// If not errors, print result
	console.log('O nome digitado é', result);
}

// myName function
function myName(name, callback) {
	// Check name type. If success, returns name. Else, returns error text.
	if ( typeof name === 'string' ) return callback(null, name);

	// Defining new error
	const error = newError('Você precisa passar uma string para nome');

	// Calling callback with error
	callback(err, null);
}

// Initing function
myName('Jonas', callback);