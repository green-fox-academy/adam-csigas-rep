let myArray : number [] = [1,2,3,4,5,6];
let myArray2 : number [] = [];
myArray.forEach(e => {
    if(e%2 ==0){
        myArray2.push(e*2);
    }
})

console.log(myArray2)