'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

export = {};
function squareception(size: number) {
    for (let i: number = 0; i < 4; i++) {
        ctx.strokeRect((canvas.width / 2) - i * (size / 2), (canvas.height / 2) - (size / 2) * i, i * size, i * size);

    }
}
squareception(20)

/* ctx.strokeRect((canvas.width / 2) - 20, (canvas.height / 2) - 20, 20, 20);
ctx.strokeRect((canvas.width / 2) - 30, (canvas.height / 2) - 30, 40, 40); */

// it has to be size/2, because our starting point is the center of the square not the corner!