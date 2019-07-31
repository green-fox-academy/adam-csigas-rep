'use strict';
export { };

let myMatress: number[][] = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]


// solution with .map - counterclockwise

function rotateThatShit(): number[][] {
    let rotatedMatress: number[][] = [];
    for (let i: number = myMatress.length - 1; i >= 0; i--) {
        rotatedMatress.push(myMatress.map(row => row[i]));
    }
    return rotatedMatress;
}

console.log(rotateThatShit());
