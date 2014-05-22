var io = require('socket.io'); 
	exports.initialize = function(server) { 
		io = io.listen(server); 
		io.sockets.on("connection", function(socket){ 
			socket.emit("login");
			
			socket.on("message", function(data){
				var data = JSON.parse(data);
				io.sockets.send(JSON.stringify(data));
				//socket.broadcast.send(JSON.stringify(data));
			});

		}); 
	};