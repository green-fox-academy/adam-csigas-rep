/* 

index − Index at which to start changing the array.

howMany − An integer indicating the number of old array elements to remove.
 If howMany is 0, no elements are removed.

element1, ..., elementN − The elements to add to the array. 
If you don't specify any elements, splice simply removes the elements from the array.

*/

/* var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 

!!!: banana will not be removed, in its place will be water and the next item will be banana
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed); */

let num1 = [7, 8, 9];
num1.forEach(function (value) {
    console.log(value);
});

