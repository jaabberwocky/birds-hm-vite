// if you are reading this, github: https://github.com/jaabberwocky/birds-hm-vite

import Typewriter from 'typewriter-effect/dist/core';
import { VANTA } from './_base';

const myCanvas = document.querySelector('#my-canvas');
const typewriterTarget = document.querySelector('#my-canvas .text-box .typewriter')
const audio = new Audio('./o.mp3');

audio.volume = 0.5;
audio.autoplay = true;
audio.loop = true;

window.addEventListener('click', () => {
})

window.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);

window.addEventListener('scroll', (e) => e.preventDefault())

window.addEventListener('touchmove', (e) => { audio.play(); e.preventDefault(); }, { passive: false })

window.addEventListener('touchend', () => audio.play())

window.addEventListener('dblclick', () => {
  audio.play();
  if (!document.fullscreenElement) {
    myCanvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
})

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
  .typeString('May we always fly<br>next to each other')
  .pauseFor(5000)


VANTA.BIRDS({
  el: "#my-canvas",
})