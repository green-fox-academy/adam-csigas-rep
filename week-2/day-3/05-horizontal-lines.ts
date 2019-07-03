'use strict';

export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.


function drawHory(myXCord: number, myYCord: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'orange';
        ctx.moveTo(myXCord + i * 100, myYCord + i * 100);
        ctx.lineTo(myXCord + i * 100 + 50, myYCord + i * 100);
        ctx.stroke();

    }
}
drawHory(50, 50)