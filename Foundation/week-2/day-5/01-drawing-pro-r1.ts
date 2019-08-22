'use strict';

export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/* ## Line play quarters
    * 1 XP *
        Divide the canvas into 4 / 16 / 64 equal parts and repeat the line play pattern in each quarter */



// first 2 lines

/* let x: number = canvas.width;
let y: number = canvas.height;


ctx.moveTo(x - 10, y - 30);
ctx.lineTo(x - 20, 20);
ctx.stroke();

for (let i: number = 0; i < 100; i += 20) {
    ctx.beginPath()
    ctx.strokeStyle = 'black';
    ctx.moveTo(x - 10, y - 10 + i);
    ctx.lineTo(x - 20 + i, 10);
    ctx.stroke();
}
 */

let x: number = 400
canvas.height = x;
canvas.width = x;

for (let gaps: number = 0; gaps < x; gaps += 20) {

    ctx.strokeStyle = 'rgb(130, 223, 135)';
    ctx.beginPath();
    ctx.moveTo(0, gaps);
    ctx.lineTo(gaps, x);
    ctx.stroke();
    ctx.closePath();
}
for (let reversegap: number = x; reversegap > 0; reversegap -= 20) {

    ctx.strokeStyle = 'rgb(213, 160, 248)';
    ctx.beginPath();
    ctx.moveTo(x, reversegap);
    ctx.lineTo(reversegap, 0);
    ctx.stroke();
    ctx.closePath();
}

//not my code, but i understand it perfectly :)

