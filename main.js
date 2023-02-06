// if you are reading this, github: https://github.com/jaabberwocky/birds-hm-vite

import Typewriter from 'typewriter-effect/dist/core';
import { VANTA } from './public/_base';

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

window.addEventListener('mousemove', () => {
})

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
  .typeString('Dbl Click - Fullscreen')
  .pauseFor(5000)
  .deleteAll()
  .typeString('For Hui Min my love')
  .pauseFor(5000)
  .deleteAll()
  .typeString('May we always fly next to each other')
  .pauseFor(5000)


VANTA.BIRDS({
  el: "#my-canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x03001c,
  color1: 0x301e67,
  color2: 0x5b8fb9,
  birdSize: 1.30,
  speedLimit: 3.00
})