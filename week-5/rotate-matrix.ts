'use strict';

let myMatress: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function rotateThatShit(): number[][] {
    let rotatedMatress: number[][] = [];
    for (let i: number = 0; i < myMatress.length; i++) {
        rotatedMatress.push(myMatress.map(row => row[i]));
    }
    return rotatedMatress;
}

console.log(rotateThatShit());