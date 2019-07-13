'use strict';
export { }

//Given a non - negative integer n, return the sum of its digits recursively(without loops).
//There is no integer type in JavaScript. To remove the rightmost digit you must divide (/)
// the number by 10 and find a way to get the the whole number portion of that number.

/* 126 : 10 = 12,6
12,6: 10 = 1,26

999: 10 = 99,9
99,9 : 10
9,99 */


function sumdigits(n: number) {
    //let summed: number = 0;
    if (n < 10) {
        return n;
    } else {
        return n + Math.floor(n % 10);
    }
}
console.log(sumdigits(8));
console.log(sumdigits(13));
console.log(sumdigits(567));

