
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
// you can do such thing: console.log(ai.length - (ai.length - 1));



'use strict';

let ai: number[] = [3, 4, 5, 6, 7];
let sum: number = 0; // if you change this value the outcome changes accordingly : if sum=1 then the oc is 25+1=26
ai.forEach(function (value) {
    sum += value; //it takes each element "value" and does the following: 0+3+4+...+7
});

console.log(sum);


// console.log(ai[0] + ai[1] + ai[2] + ai[3] + ai[4]); //this is like a bruteforce method :)
//


/* console.log(ai);
let i: number = 0;
ai[i + 1] = ai[i] + ai[i + 1]; //1
console.log(ai);
ai.splice(0, 1);
console.log(ai);
ai[i + 1] = ai[i] + ai[i + 1]; //2
console.log(ai);
ai.splice(0, 1);
console.log(ai);
ai[i + 1] = ai[i] + ai[i + 1]; //3
console.log(ai);
ai.splice(0, 1);
console.log(ai);
ai[i + 1] = ai[i] + ai[i + 1]; //4
console.log(ai);
ai.splice(0, 1);
console.log(ai);
 */

// 4 = ai.length-1 steps needed


