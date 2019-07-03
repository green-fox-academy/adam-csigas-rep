
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

export = {};

/* function magic4square(a: number, b: number) {
    for (let i: number = 0; i < 4; i++) {
        ctx.fillRect( + (i * a) + (i * b), 0,  + (i * a), a + (i * a));

    }
}
magic4square(0, 0); */

ctx.fillRect(0, 0, 10, 10)
ctx.fillRect(20, 0, 40, 40)
ctx.fillRect(70, 0, 70, 70)
ctx.fillRect(150, 0, 100, 100)


//ctx.fillRect(a, b, c, d) 
//Tfh, I want my square to get bigger, every time 30 px, let a : number = 30;
// and I always want 10 px gap between the two squares, let b : number = 10;
//ctx.fillRect(x, y ,w ,h )

// 0.) ctx.fillRect(0, 0, a, a)
// 1.) ctx.fillRect(0 + a + b, 0, 30 + a, 30 + a)



