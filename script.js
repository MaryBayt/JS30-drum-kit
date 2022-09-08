const keys = document.querySelectorAll('.key');

function playSoundAndAnimation (evt) {
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing'); // add animation visualization
}

function removeTransition (evt) {
    if(evt.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing'); // this = key as the listener is on it
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSoundAndAnimation);
