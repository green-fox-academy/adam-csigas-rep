'use strict';

export = {};

const myCanvasWidth: number = 600;
const myCanvasHeigth: number = 400;

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
let r: number = 255;
ctx.fillStyle = '#C2EA7E';
ctx.fillRect(400, 400, 200, 100);
ctx.strokeStyle = 'green';
ctx.strokeRect(220, 220, 100, 100);

ctx.beginPath();
ctx.moveTo(300, myCanvasHeigth / 2);
ctx.lineTo(300, 400);
ctx.lineTo(400, 200);
//ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(50, 50, 50, Math.PI, Math.PI * 2);
ctx.stroke();

for (let i = 0; i < 10; i++) {
    ctx.fillRect(50 * i, 10 * i + 100, 50, 50);
}


function drawCube(x: number, y: number, size: number) {
    ctx.fillRect(x, y, size, size);
}
ctx.fillStyle = 'red';
ctx.strokeRect(200, 300, 50, 50);
drawCube(200, 300, 50);

let circles = {
    centers: [[200, 100], [500, 300]],
    widths: [[100, 50], [50, 100]]
}

function drawCircle(whatToDraw: any) {
    whatToDraw.centers.forEach(center => {
        ctx.ellipse(center[0], center[1], whatToDraw.widths[0][0], whatToDraw.widths[0][1], Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = "lime";
        ctx.fill();
    });
}

drawCircle(circles);