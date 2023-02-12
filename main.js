import Typewriter from 'typewriter-effect/dist/core';
import { TOBIAS } from './_base';

const myCanvas = document.querySelector('#my-canvas');
const typewriterTarget = document.querySelector('#my-canvas .text-box .typewriter')
const audio = new Audio('./o.mp3');
let audioPlaying = false;

audio.volume = 0.5;
audio.loop = true;

window.addEventListener('click', () => {
  checkAudio();
})

window.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);

window.addEventListener('scroll', (e) => e.preventDefault())

window.addEventListener('touchmove', (e) => { checkAudio(); e.preventDefault(); }, { passive: false })

window.addEventListener('touchend', () => checkAudio())

window.addEventListener('dblclick', (e) => {
  if (!document.fullscreenElement) {
    myCanvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
})

window.addEventListener('keypress', (e) => {
  if (e.code == 'Space') {
    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }
})

const checkAudio = () => {
  if (audio.paused) {
    audio.play()
  }
}


const typer = new Typewriter(typewriterTarget, {
  loop: false,
  delay: 'natural',
  deleteSpeed: 'natural',
  cursor: '',
})
typer
  .start()
  .pauseFor(2500)
  .typeString('For Hui Min my love')
  .pauseFor(5000)
  .deleteAll()
  .typeString('May we always fly next to each other')
  .pauseFor(5000)


TOBIAS.BIRDS({
  el: "#my-canvas",
})