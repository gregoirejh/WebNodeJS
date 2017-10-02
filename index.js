var http=require('http');
var server = require('./server.js');

http.createServer(function(req, res){
	server.logic(req, res);
	
}).listen(server.port,server.address);