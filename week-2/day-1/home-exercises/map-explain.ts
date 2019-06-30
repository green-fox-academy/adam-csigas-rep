/* 
array.map(callback[, thisObject]);

callback − Function that produces an element of the new Array from an element of the current one.

thisObject − Object to use as this when executing callback.

*/

var numbers1 = [1, 4, 9]; 
var roots = numbers1.map(Math.sqrt); 
console.log("roots is : " + roots );