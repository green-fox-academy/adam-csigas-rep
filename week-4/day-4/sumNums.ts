'use strict';

/* Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
    create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empyt list
a list that has one element in it
a list that has multiple elements in it
Run them
Fix your code if needed */

export class NumberSummer {
    numListA: number[];


    constructor(numListA: number[]) {
        this.numListA = numListA;

    }

    sum(): number {
        let summedNums: number = 0;
        for (let i: number = 0; i < this.numListA.length; i++) {
            summedNums += this.numListA[i];
        }
        return summedNums
    }
}

let beGood: NumberSummer = new NumberSummer([5, 10, 15, 20, 60, 210, 43, -63]);
console.log(beGood)
console.log(beGood.sum());