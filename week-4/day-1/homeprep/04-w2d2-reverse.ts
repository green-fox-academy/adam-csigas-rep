'use strict';
export { };
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function normal() {
    let emptyA: string = '';
    for (let i: number = reversed.length - 1; i >= 0; i--) {
        emptyA += (reversed[i]);
    } return emptyA
}

console.log(normal());