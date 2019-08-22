'use strict';

let numToMultiply : number = 12;

let twice : number = numToMultiply * 2;
console.log(twice);


let anotherone : number = 11;

let twiceanotherone : number = anotherone * 2;
console.log(twiceanotherone);

//when we have a lot of numbers its not efficient to write a code every time to every variable

function printNumberAndChangeIt(inputNumber : number = 10): void {
    let doubledValue : number = inputNumber *2;
    console.log(doubledValue);
}

printNumberAndChangeIt();
printNumberAndChangeIt(11);



/*  
function multiplication(base: number, another: number): number {
    return base * another;
}




console.log(multiplication(3, 6)); //multiplication aka method

*/



