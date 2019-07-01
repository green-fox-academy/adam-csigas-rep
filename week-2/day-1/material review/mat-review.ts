/* Last week stuff   */

'use strict';
let myName : string = "Adam0";
let yourName : string = "Adam1";
let hisName : string = "Adam2";


console.log(myName);
console.log(yourName);
console.log(hisName);

let array: string[] = ["Morzsi", "Liza", "Furkesz", "Riley"];

console.log(array[0]);
console.log(array);

array.forEach(function(item) {
    console.log(item);
})

//item can be anything

for (let i : number = 0; i < array.length; i++) {
    console.log(array[i]);
}

let diffArray1 : any[] = [true, false, 1 , "Mazli" ];

let diffArray11 : Array<any> = [true, false, 1 , "Mazli"];

let diffArray12 : Array<string | number> = ["yay", "10", 33 ];


let diffArray2 : [string, boolean] = ["Adam", true]; //Tupple

//diffArray1.forEach

console.log(diffArray1);

diffArray1.splice(0,1,"marks");
console.log(diffArray1);


let doubled: number[] = [1 ,2 ,3 ,4 ,5].map(function(i){
    return i*2;
})

console.log(doubled);

let odds : number[] = [1, 2, 3, 4, 5].filter(function(item){
    return item % 2 != 0;
})
console.log(odds);


// map returns work and give back all of the elements
// filter

let magic : number [] = [] ;

console.log(magic[-100]); // we used these last 2 lines to point out something

let odds2 : number[] = [1, 2, 3, 4, 5].filter(function(i){
    if(i % 2 == 0) {
        return i *2;
    }
}).filter(function(item){
    return item != undefined;
})

console.log(odds2);

//Spread

let arry1: number[] = [1, 2];
let arry2: number[] = [3, 4];

let arry3: any[] = [arry1, arry2];
console.log(arry3);

let arry4 : any[] = [...arry1, ...arry2];
console.log(arry4);