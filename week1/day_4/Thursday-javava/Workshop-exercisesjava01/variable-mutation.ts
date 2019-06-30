'use strict';

let a1: number = 3;
// make it bigger by 10

a1 = a1 + 10;

console.log(a1);

let b1: number = 100;
// make it smaller by 7

b1 = b1 - 7;

console.log(b1);

let c1: number = 44;
// double c's value

c1 = c1*2;

console.log(c1);

let d1: number = 125;

d1 = d1/5;

// divide d's value by 5

console.log(d1);

let e1: number = 8;

// what's the cube of e's value?

e1 = e1 ** 3;

console.log(e1);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)

console.log(f1>f2);


let g1: number = 350;
let g2: number = 200;

// tell if the double of g2 is bigger than g1 (pras a boolean)

console.log((g2*2)>g1);

let h1: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)

console.log(h1 % 11 === 0); // I loved this one!!!


let i1: number = 10;
let i2: number = 3;

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

console.log(i1> i2 ** 2 && i1 < i2 ** 3);

let j1: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)

console.log(j1 %3 === 0 || j1 %5 === 0 );
