'use strict';
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount2 is


// I don't feel like this is a program but it works... :D : console.log( " *", '\n' , "**", '\n' , "***" , '\n' , "****");

let lineCount2: number = 4;

for (let i : number = 0; i < lineCount2; i ++){
    let Tstars : number = i + 2;
    console.log(Array(Tstars).join('*'));
}



