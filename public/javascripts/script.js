var socket = io.connect('http://localhost:3000');

socket.on('login', function(data){
	var name = prompt("Cual es tu nombre?");
	document.getElementById("name").innerHTML = name;
});

window.onload = function(){
	var tweetbutton = document.getElementById("tweetbutton");
	var tweetmessage = document.getElementById("tweetmessage");
	window.sectionright = document.getElementById("right");
	tweetbutton.addEventListener("click", function(e){
		e.preventDefault();
		var newtweet = document.createElement("div");
		newtweet.innerHTML = '<h3>' + document.getElementById("name").innerHTML + '</h3><p>' + tweetmessage.value + '</p>';
		document.getElementById("right").appendChild(newtweet);
	});
};