'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

export = {};

let starX: number = 295;
let starY: number = 195;
let altX: number = 285;
let altY: number = 185;

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.moveTo(starX, starY);
ctx.lineTo(starX, altY);
ctx.lineTo(altX, altY);
ctx.lineTo(altX, starY);
ctx.fill();


