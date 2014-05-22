window.onload = function(){

	var socket = io.connect('http://localhost:3000');

	socket.on('login', function(data){
		var name = prompt("Cual es tu nombre?");
		document.getElementById("name").innerHTML = name;
	});

	var tweetbutton = document.getElementById("tweetbutton");
	var tweetmessage = document.getElementById("tweetmessage");
	
	tweetbutton.addEventListener("click", function(e){
		e.preventDefault();
		socket.emit("message", JSON.stringify({
			name: document.getElementById("name").innerHTML,
			tweet: tweetmessage.value
		}));
	});

	socket.on("message", function(data){
		var data = JSON.parse(data);
		var newtweet = document.createElement("div");
		newtweet.innerHTML = '<h3>' + data.name + '</h3><p>' + data.tweet + '</p>';
		document.getElementById("right").appendChild(newtweet);
	});

};