
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

export = {};
ctx.fillStyle = 'purple';

function drawPurpleSquare(x: number, a: number) {
    ctx.fillRect(x, x, a, a);
}

let startingSize: number = 18;
let muliplier: number = 1.5;

let position: number = 0;
let size: number = startingSize;

for (let i: number = 0; i < 6; i++) {
    drawPurpleSquare(0 + position, size);
    position += startingSize * muliplier ** i;
    size *= muliplier;
    console.log(i + ': ' + position);
    console.log(i + ': ' + size);
}


/* let gap: number = 10; */

/* function magic4square(a: number) {
    for (let i: number = 0; i < 4; i++) {
        ctx.fillRect(0 + gap + a * i, 0, 10 + a * i, 10 + a * i);

    }
}
magic4square(30); */

/* ctx.fillRect(0, 0, 10, 10)
ctx.fillRect(20, 0, 40, 40)
ctx.fillRect(70, 0, 70, 70)
ctx.fillRect(150, 0, 100, 100)
 */


//ctx.fillRect(a, b, c, d) 
//Tfh, I want my square to get bigger, every time 30 px, let a : number = 30;
// and I always want 10 px gap between the two squares, let b : number = 10;
//ctx.fillRect(x, y ,w ,h )

// 0.) ctx.fillRect(0, 0, a, a)
// 1.) ctx.fillRect(0 + a + b, 0, 30 + a, 30 + a)



