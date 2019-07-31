'use strict';

let myMatress: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let rotatedMatress2: number[][] = [];

for (let i: number = 0; i < myMatress.length; i++) {
    let row: number[] = [];
    for (let j: number = myMatress.length - 1; j >= 0; j--) {
        row.push(myMatress[j][i])
    }
    rotatedMatress2.push(row)
}