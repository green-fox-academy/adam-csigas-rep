'use strict';
export { };

//no ragrets

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let output: number[][] = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
console.table(matrix)

let rotatedMatrix: number[][] = [];
for (let i: number = 0; i < matrix.length; i++) {
    let row: number[] = [];
    for (let j: number = matrix.length - 1; j >= 0; j--) {
        if (i+j-1 == matrix.length) {
            row.push(0);
        } else {
            row.push(matrix[j][i]);
        }
    }
    rotatedMatrix.push(row)
}
console.table(rotatedMatrix)