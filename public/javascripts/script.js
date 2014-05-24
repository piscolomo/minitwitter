window.onload = function(){

	var socket = io.connect('http://localhost:3000');

	var tweetbutton = document.getElementById("tweetbutton");
	var tweetmessage = document.getElementById("tweetmessage");
	var favorites = document.getElementsByClassName("favorite");

	function listenerfavorites(){
		for (var i=0;i<favorites.length;i++){
			favorites[i].addEventListener("click", function(e){
				e.preventDefault();
				socketid = this.getAttribute("data-id");
				name= document.getElementById("name").textContent;
				tweet = this.previousSibling.textContent;
				socket.emit("favorite", socketid, name, tweet);
			});
		}
	}

	socket.on('login', function(data){
		var name = prompt("Cual es tu nombre?");
		document.getElementById("name").innerHTML = name;
	});
	
	tweetbutton.addEventListener("click", function(e){
		e.preventDefault();
		socket.emit("message", JSON.stringify({
			name: document.getElementById("name").innerHTML,
			tweet: tweetmessage.value
		}));
	});
	
	socket.on("message", function(data, socketid){
		tweetmessage.value = "";
		var data = JSON.parse(data);
		var feed = document.getElementById("feed");
		var newtweet = document.createElement("div");
		newtweet.innerHTML = '<h3>' + data.name + '</h3><p>' + data.tweet + '</p><a class="favorite" data-id="'+socketid+'">Favorito</a>';
		feed.insertBefore(newtweet, feed.firstChild.nextSibling);
		listenerfavorites();
	});

	socket.on("favorite", function(name, tweet){
		var notifications = document.getElementById("notifications");
		var newnotification = document.createElement("div");
		newnotification.innerHTML = '<p><b>' + name + '</b> marcó como favorito un Tweet<br/><span>' + tweet + '</span>';
		notifications.insertBefore(newnotification, notifications.firstChild.nextSibling);
	});

};