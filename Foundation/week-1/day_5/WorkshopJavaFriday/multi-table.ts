'use strict';

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15

let number: number = 15;
let i : number = 1;
let result : number = number * i ;


while (i < 11) {
    console.log(i + ' * ' + number + ' = ' + result) 
    i++;
    result = number * i;
  }