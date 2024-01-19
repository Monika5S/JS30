function handleKey(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.keyBox p[data-key="${event.keyCode}"]`);

  if (audio) {
    audio.currentTime = 0; //play sound from start
    audio.play(); //play sound
    key.classList.add("playing");
  }
}

function removeAnimation(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  e.target.classList.remove("playing");
}

window.addEventListener("keydown", handleKey);
document
  .querySelectorAll(".keyBox p")
  .forEach((key) => key.addEventListener("transitionend", removeAnimation));
