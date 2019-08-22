'use strict';
export {};


let myMatrix : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let myRotatedMatrix : number [][]= [];

for (let i: number = myMatrix.length - 1; i >= 0; i--){
    let row : number[] = [];
    for(let j : number = 0; j < myMatrix.length; j++){
        row.push(myMatrix[j][i]);
    }
    myRotatedMatrix.push(row);
}

console.log(myRotatedMatrix)