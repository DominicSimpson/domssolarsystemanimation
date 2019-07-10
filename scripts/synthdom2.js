function aud_play_pause() {
var myAudio = document.getElementById(“myTune”);
if (myAudio.paused) {
myAudio.play();
} else {
myAudio.pause();
}
}