'use strict';

let myMatress: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]


// solution with .map

function rotateThatShit(): number[][] {
    let rotatedMatress: number[][] = [];
    for (let i: number = 0; i < myMatress.length; i++) {
        rotatedMatress.push(myMatress.map(row => row[i]));
    }
    return rotatedMatress;
}

console.log(rotateThatShit());

let rotatedMatress2: number[][] = [];
for (let i: number = 0; i <= myMatress.length; i++) {
    for (let j: number = 0; j <= myMatress.length; j++) {
        console.log(i, j);
    }
}
