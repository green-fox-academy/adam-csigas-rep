
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1 -> 0 - 3
//    0 0 1 0 -> 1 - 2
//    0 1 0 0 -> 2 - 1
//    1 0 0 0 -> 3 - 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';

let matrix: number[][] = [];

let size: number = 5;
for (let i = 0; i < size; i++) {
    let row: number[] = [];
    for (let j: number = 0; j < size; j++) {
        if (size - j - 1 == i) {
            row.push(1);
        } else {
            row.push(0);
        }

    }
    matrix.push(row);
}

console.log(matrix);

//This one is not created by me!!! Have to work on it.
//05.07.19 i understand the code