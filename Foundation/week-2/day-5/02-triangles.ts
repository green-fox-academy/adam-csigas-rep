'use strict';

export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


//let x: number = canvas.width;
let y: number = canvas.height;



ctx.beginPath();
ctx.moveTo(0, y);
ctx.lineTo(10, y - 10);
ctx.lineTo(20, y);
ctx.stroke()


