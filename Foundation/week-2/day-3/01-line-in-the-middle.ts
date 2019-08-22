'use strict';



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, 200);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300, 200);
ctx.lineTo(300, 0);
ctx.stroke();



