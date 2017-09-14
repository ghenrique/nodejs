'use strict'

// Callback function
function callback (err, result) {
	// Check if there are errors
	if (err) throw new Error(err);

	// If not errors, print result
	console.log('A média dos valores é', result);
}

function add (value1, value2, callback) {
	
	// Set result value
	let result = (value1 + value2)/2;

	// Check if typeof values are number. If not, throw error
	if ( typeof value1 === 'number' && typeof value2 === 'number' ) return callback(null, result);

	// Defining error
	const error = newError('Você precisa passar valores numéricos');

	// Bringing callback and passing error
	callback(err, null);
}

// Init function
add(5, 3, callback);

