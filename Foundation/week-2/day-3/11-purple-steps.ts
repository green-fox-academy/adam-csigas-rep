'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

export = {};

ctx.fillStyle = 'rgb(177,79,243)';
ctx.strokeStyle = 'black';

function magic4square(x: number, y: number) {
    for (let i: number = 0; i < 20; i++) {
        ctx.fillRect(x + i * 10, y + i * 10, 10, 10);
        ctx.strokeRect(x + i * 10, y + i * 10, 10, 10);

    }
}
magic4square(10, 10);