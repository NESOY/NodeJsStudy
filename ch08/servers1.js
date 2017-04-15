var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	fs.access('./ca11.jpg', function(err) {
		if ( err ) {
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.readFile('./cat.jpg', function(err, data) {			
			res.end(data);
		});
		
	});
}).listen(3000);