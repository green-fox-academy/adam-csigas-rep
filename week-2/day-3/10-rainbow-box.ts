'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

export = {};

let myColors: string[] = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

function squareception(size: number) {
    for (let i: number = 0; i < 8; i++) {
        ctx.strokeRect((canvas.width / 2) - i * (size / 2), (canvas.height / 2) - (size / 2) * i, i * size, i * size);
        ctx.strokeStyle = myColors[i];
    }
}
squareception(20);



