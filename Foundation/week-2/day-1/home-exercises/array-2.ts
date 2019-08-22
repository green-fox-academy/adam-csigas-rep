let myarray : number[] = [10, 20, 30, 40];
console.log(myarray[0]);

let myarray2 : Array<any> = [true, 10, 'hello'];

console.log(myarray2);

let myTuple : [string,number] = ['hy', 10,];

// !!! if let myTuple : [string,number] = ['hy', 10, 'third string']; third string added it will not work!
// you have to add it to the declaration part! e.g.: 
/* let myTuple : [string, number, string] = ['hy',10, 'third string']; now it will work
*/
