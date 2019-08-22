'use strict';

// const myCanvasWidth: number = 600;
// const myCanvasHeight: number = 400;

export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

let i: number = 0;
let j: number = 0;
ctx.beginPath();
ctx.moveTo(i, j);

if (i == 0 && j == 0) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, 0);
    ctx.lineTo(600, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(600, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();
} else {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(0, 0);
    ctx.lineTo(600, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(600, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();

}