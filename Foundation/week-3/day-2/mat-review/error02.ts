'use strict';
export { };


let numbers: number[];

let firstNumber: number;

console.log('before');
try {
    console.log('before in try block');
    firstNumber = numbers[0];
    console.log('after in try block');
} catch (e) {
    console.log('some serious shit happend...');
    console.log(e);
    firstNumber = 0;
}
console.log(firstNumber);
console.log('after');