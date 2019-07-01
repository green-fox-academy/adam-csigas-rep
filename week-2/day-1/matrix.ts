
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
for (let index = 0; index < size; index++) {
    let row: number[] = [];
    for (let inner: number = 0; inner < size; inner++) {
        if (size - inner - 1 == index) {
            row.push(1);
        } else {
            row.push(0);
        }

    }
    matrix.push(row);
}

console.log(matrix);
