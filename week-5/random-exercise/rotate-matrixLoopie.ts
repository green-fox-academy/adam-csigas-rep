'use strict';

let mahMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function loopieWillRotate(): number[][] {
    let mahRotatedMatrix: number[][] = [];
    for (let i: number = 0; i < mahMatrix.length; i++) {
        let row: number[] = [];
        for (let j: number = mahMatrix.length - 1; j >= 0; j--) {
            row.push(mahMatrix[j][i]);
        }
        mahRotatedMatrix.push(row)
    }
    return mahRotatedMatrix;
}

console.log(loopieWillRotate());
