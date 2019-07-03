'use strict';

export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(30, 30);
ctx.lineTo(450, 30);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(450, 30);
ctx.lineTo(450, 275);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(450, 275);
ctx.lineTo(30, 275);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(30, 275);
ctx.lineTo(30, 30);
ctx.stroke();
