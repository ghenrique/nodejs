// Server

'use strict'

// Set new date | Retrieving to JSON format
var date = (new Date()).toJSON();

// Creating constants
const http = require('http'),
	  SUCCESS = { // Creating success response
		  version: 1.0,
		  name: 'Be MEAN',
		  returned_at: date
	  },
	  ERROR = { // Creating error response
	  	message: 'Server not found.'
	  };


// Create HTTP server
http.createServer( function( req, res ) {
	
	// Testing if API exists
	if ( req.url === '/api/v1' ) {
		// Write head, and setting to JSON, and setting response code to 200 (success)
		res.writeHead( 200, {'Content-Type': 'application/json'} );
		// Retrieving success messsage | Stringify converts JSON Object to string
		// res.write and res.end only accepts strings and buffers
		res.write( JSON.stringify(SUCCESS) );
	} else {
		// Write head, and setting to JSON, and setting response code to 400 (not found)
		res.writeHead( 400, {'Content-Type': 'application/json; charset="utf-8"' } );
		// Retrieving error message
		res.write( JSON.stringify(ERROR) );
	}
	
	// Ending conection
	res.end();

}).listen(3000, function() { // Set server to listen on local server, port 3000
	console.log('Servidor rodando em localhost:3000');
});