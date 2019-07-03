'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

export = {};

ctx.fillStyle = 'rgb(177,79,243)';
ctx.strokeStyle = 'black';
let j: number = 10;

function magic4square(x: number, y: number) {
    for (let i: number = 0; i < 7; i++) {
        ctx.fillRect(x + i * 10, y + i * 10, 10 + j * i, 10 + j * i);
    }
}
magic4square(0, 0);

/* ctx.fillRect(0, 0, 10, 10)
ctx.fillRect(20, 0, 40, 40)
ctx.fillRect(70, 0, 70, 70)
ctx.fillRect(150, 0, 100, 100) */