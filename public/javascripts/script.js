var socket = io.connect('http://localhost:3000');

socket.on('login', function(data){
	var name = prompt("Cual es tu nombre?");
	document.getElementById("name").innerHTML = name;
});