// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict';

export = {};

// Where N = the number of elements in our array

let myNumbers: number[] = [];
let N: number = 10;
let sum: number = 0;

for (let i: number = 0; i <= N; i++) {
    myNumbers.push(i);
}

console.log(myNumbers);


for (let j: number = 0; j <= N; j++) {
    sum += myNumbers[j];
}
console.log(sum);





