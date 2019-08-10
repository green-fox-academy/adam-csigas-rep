'use strict';


let matrix1: number[][] = [
    [3, 6, 9],
    [3, 4, 4],
    [3, 7, 7]
]

let matrix2: number[][] = [
    [2, 1, 2],
    [1, 4, 5],
    [0, 3, 0]
]

/* 
Output:
[
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]

*/

//function

function greaterMatrix(matrix1: number[][], matrix2: number[][]): number[][] {

    let matrix1Array: number[] = [];
    let matrix2Array: number[] = [];
    let comparedMatrix: number[][] = [];

    for (let i: number = 0; i < matrix1.length; i++) {
        for (let j: number = 0; j < matrix1.length; j++) {
            matrix1Array.push(matrix1[i][j]);
        }
    };

    for (let i: number = 0; i < matrix2.length; i++) {
        for (let j: number = 0; j < matrix2.length; j++) {
            matrix2Array.push(matrix2[i][j]);
        }
    };

    let startingPoint: number = 0;
    for (let i: number = 0; i < matrix1.length; i++) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix1.length; j++) {
            if (matrix1Array[j + startingPoint] >= matrix2Array[j + startingPoint]) {
                row.push(matrix1Array[j + startingPoint]);
            } else {
                row.push(matrix2Array[j + startingPoint]);
            }
        }
        comparedMatrix.push(row);
        startingPoint += matrix1.length;
    }

    return comparedMatrix;
}

console.log(greaterMatrix(matrix1, matrix2))


export { greaterMatrix };