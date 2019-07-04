'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

export = {};

let gap: number = 50;

function DrawToMiddle(myXCord: number, myYCord: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(myXCord, myYCord)
    ctx.lineTo(300, 200);
    ctx.stroke();

}
for (let i: number = 0; i <= canvas.width; i += gap) {
    DrawToMiddle(0 + i, 0)
}
for (let i: number = 0; i <= canvas.height; i += gap) {
    DrawToMiddle(0, 0 + i)
}
for (let i: number = 0; i <= canvas.width; i += gap) {
    DrawToMiddle(0 + i, canvas.height)
}
for (let i: number = 0; i <= canvas.height; i += gap) {
    DrawToMiddle(canvas.width, 0 + i)
}
