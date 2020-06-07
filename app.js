window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return // stop the function from running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});

//In touchscreen
window.addEventListener('touchstart', function(e){
var touchlist = e.touches
for (var i=0; i<touchlist.length; i++){
	//loop through all touch points
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return // stop the function from running all together
    audio.currentTime = 0;
    audio.play();
    window.
    key.classList.add("playing")};
});

function removeTransition(e){
	if (e.propertyName !== 'transform')
		return
	this.classList.remove("playing");
}

const Keys = document.querySelectorAll('.key');
Keys.forEach(key => key.addEventListener('transitionend',removeTransition));
