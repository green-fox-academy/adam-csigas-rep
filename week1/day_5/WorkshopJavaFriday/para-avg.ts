'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3


let mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mynumsum = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
let mynumavg = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) / mynumbers.length ;
console.log("The sum of the numbers is ", + mynumsum , "The average of the given numbers is " ,  + mynumavg );

// another solution - more sophisticated one I guess

/* 
function getAverage (a,b,c,d,e,f,g){

    let average = (a + b + c + d + e + f + g) / 7;
    console.log(average);
    return average;
}

let myResult = getAverage(1,2,3,4,5,6,7);
console.log("The average is " + myResult);
*/



