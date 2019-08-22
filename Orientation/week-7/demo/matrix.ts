'use strict';

let matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i: number = 0; i < matrix1.length; i++) {
    for (let j: number = 0; j < matrix1.length; j++) {
        console.log(i, j);
    };
};

console.table(matrix1);

// (let i: number = 0; i < matrix1.length; i++) INCREMENT
// (let i : number = matrix1.length - 1; i >= 0; i--) DECREMENT

// (let j: number = 0; j < matrix1.length; j++) INCREMENT
// (let j : number = matrix1.length - 1; j >= 0; i--) DECREMENT

//console.log(i, j);
//console.log(j, i);
