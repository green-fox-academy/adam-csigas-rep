
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

export = {};

function magic4square(x: number, y: number) {
    for (let i: number = 0; i < 4; i++) {
        ctx.fillRect(x + (i * 10), y + (i * 10), 10 * i * 2, 10 * i * 2);
    }
}
magic4square(0, 0);