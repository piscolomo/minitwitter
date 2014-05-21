var io = require('socket.io'); 
	exports.initialize = function(server) { 
		io = io.listen(server); 
		io.sockets.on("connection", function(socket){ 
			console.log('work server!');
			data = "hola";
			socket.send(data);
		}); 
	};