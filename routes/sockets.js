var io = require('socket.io'); 

exports.initialize = function(server) { 
	io = io.listen(server); 
	io.sockets.on("connection", function(socket){ 
		socket.emit("login");
			
		socket.on("message", function(data){
			var data = JSON.parse(data);
			io.sockets.emit("message",JSON.stringify(data), socket.id);
		});

		socket.on("favorite", function(socketid, name, tweet){
			io.sockets.socket(socketid).emit("favorite", name, tweet);
		});

	}); 
};