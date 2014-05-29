var io = require('socket.io'); 

exports.initialize = function(server) { 
	io = io.listen(server); 
	io.sockets.on("connection", function(socket){ 
		socket.emit("login");
			
		socket.on("message", function(data){
			io.sockets.emit("message",data, socket.id);
		});

		socket.on("favorite", function(socketid, name, tweet){
			if (socket.id != socketid){
				io.sockets.socket(socketid).emit("favorite", name, tweet);
			}
		});

	}); 
};
