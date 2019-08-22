'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount3 : number = 7;

for(let i : number = 0; i < lineCount3; i ++){
    let diamondStars : number = 2 * i + 1;
    let diamondSpace : number = lineCount3 - 3 + i - diamondStars;
        if(i< lineCount3 / 2 ){
            console.log(Array(diamondSpace +1).join('-')+ Array(diamondStars + 1).join('*'));
        }

/*         if (i <= lineCount3 / 2 ){
            i --;
            diamondStars = 2 * i - 1;
            console.log(Array(diamondSpace +1).join('-')+ Array(diamondStars + 1).join('*'));
 */    
}

