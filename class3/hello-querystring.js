// Hello QueryString

'use strict'

// Require HTTP and URL
let http = require('http'),
	url  = require('url');


// Creating server
http.createServer( function ( req, res ) {

	// Set parsed URL to variable
	var result = url.parse( req.url, true );

	// Setting Head to text/html
	res.writeHead( 200, {'Content-Type': 'text/html'} );

	// Writing html structure
	res.write('<html><body>');
	res.write('<h1>QueryString</h1>');

	// Creating a list to show URL paramenters
	res.write('<ul>');

	console.log(result);
	console.log(result.query);

	// Getting the keys present in result variable (parsed url)
	for ( var key in result.query ) {
		// Creating list elements with key result
		res.write( '<li>' + key + ': ' + result.query[key] + '</li>' );
	}

	// Closing created tags
	res.write('</ul>');
	res.write('</body></html>');
	res.end();

}).listen(3000, function() {
	console.log('Servidor rodando em localhost:3000');
});