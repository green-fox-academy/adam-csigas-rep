
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

export = {};

ctx.fillRect(0, 0, canvas.width / 8, canvas.height / 8);
ctx.fillRect(canvas.width / 8 * 2, 0, canvas.width / 8, canvas.height / 8);
ctx.fillRect(canvas.width / 8 * 4, 0, canvas.width / 8, canvas.height / 8);
ctx.fillRect(canvas.width / 8 * 6, 0, canvas.width / 8, canvas.height / 8);
ctx.fillRect(canvas.width / 8 * 6, canvas.height / 8 * 2, canvas.width / 8, canvas.height / 8);

/* for (let i: number = 2; i <= 6; i + 2) {
    ctx.fillRect(canvas.width / 8 * i, 0, canvas.width / 8, canvas.height / 8);
}
 */
// ctx.fillrect(x,y,w,h) ; if x == canvas.width / 8 * 6 , then y = canvas.height / 8 *2

//Can you divide in js with 0?