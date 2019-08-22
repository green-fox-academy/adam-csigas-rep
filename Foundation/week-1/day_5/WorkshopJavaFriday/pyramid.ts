'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i ++) {
    let stars: number = (2 * i) + 1;
    let spaces: number = (lineCount + i) - stars;
    console.log(Array(spaces + 1).join('-') + Array(stars + 1).join('*'));
 }

