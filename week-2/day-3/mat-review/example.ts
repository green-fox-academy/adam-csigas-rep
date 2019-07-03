'use strict';

export = {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let r: number = 255;
ctx.fillStyle = '#C2EA7E';
ctx.fillRect(400, 400, 200, 100);
ctx.strokeStyle = 'green';
ctx.strokeRect(220, 220, 100, 100);

ctx.beginPath();
ctx.moveTo(300, 300);
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