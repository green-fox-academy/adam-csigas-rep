'use strict';

let myMatress: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const index = 0;

console.log(myMatress.map(row => row[index]));

/* for (let i: number = 0; i < myMatress.length; i++) {
    for (let j: number = 0; j < myMatress.length; j++) {
        if (myMatress[i][j] !== myMatress[j][i]) {

        }
    }
} */