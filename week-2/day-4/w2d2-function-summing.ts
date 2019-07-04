// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict';

export = {};

// Where N = the number of elements in our array

// without function

/* let myNumbers: number[] = [];
let N: number = 10;
let neededThing: number = 0;

for (let i: number = 0; i <= N; i++) {
    myNumbers.push(i);
}

console.log(myNumbers);


for (let j: number = 0; j <= N; j++) {
    neededThing += myNumbers[j];
}
console.log(neededThing); */


// with function

let myNumbers: number[] = [];

function sum(N: number): number {
    let neededThing: number = 0;

    for (let i: number = 0; i <= N; i++) {

        myNumbers.push(i);
    }

    for (let j: number = 0; j <= N; j++) {
        neededThing += myNumbers[j];
    }

    return neededThing
}

console.log(sum(20));
console.log(sum(10));

