myAudio = new Audio('https://mediacru.sh/download/-wM8UXa1gEEt.mp3'); 
myAudio.addEventListener('ended', function() {
	this.currentTime = 0;
	this.play();
}, false);
myAudio.play();

