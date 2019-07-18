'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black - done
//  - The stars should be small squares - done
//  - The stars should have random positions on the canvas - working on it
//  - The stars should have random color (some shade of grey)

/* function oneStar(numberofstars : number) {
    ctx.beginPath()
    ctx.fillStyle = 'white';
    ctx.moveTo(0, 10);
    ctx.lineTo(10, 0);
    ctx.lineTo(20, 10);
    ctx.lineTo(10, 20);
    ctx.fill();
}  */
export = {};

/* ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let starPositionX: number = Math.floor(Math.random() * canvas.width) + 1;
let starPositionY: number = Math.floor(Math.random() * canvas.height) + 1;
ctx.fillStyle = 'white';

//1 star 

ctx.fillRect(starPositionX, starPositionY, 10, 10);

for (let i: number = 1; i < 100; i++) {
    ctx.fillRect(starPositionX * i, starPositionY * i, 10, 10);

} */


let greyRGBs: string[] = ['rgb(220,220,220)', 'rgb(211,211,211)', 'rgb(192,192,192)', 'rgb(169,169,169)', 'rgb(128,128,128)', 'rgb(105,105,105)', 'rgb(112,128,144)'];
let starSizeMax: number = 20;
let numberOfStars: number = 60;

//background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar(positionX: number, positionY: number, size: number) {
    ctx.fillStyle = greyRGBs[Math.floor(Math.random() * 7)];
    ctx.fillRect(positionX, positionY, size, size);
}

for (let i: number = 1; i <= numberOfStars; i++) {
    drawStar(Math.floor(Math.random() * (canvas.width - starSizeMax)), Math.floor(Math.random() * (canvas.height - starSizeMax)), Math.floor(Math.random() * starSizeMax));
}

//not my code don't understand it yet!!