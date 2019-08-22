'use strict';
export = {};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverseString(str) {

    let newString: string[] = [""];

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

console.log(reverseString(reversed));