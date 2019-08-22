// concatenating arrays

// not so good

var arr11 = [0, 1, 2];
var arr22 = [3, 4, 5];
// Append all items from arr22 onto arr11
arr11 = arr11.concat(arr22);

// w spread syntax

var arr111 = [0, 1, 2];
var arr222 = [3, 4, 5];
arr111 = [...arr111, ...arr222]; // arr111 is now [0, 1, 2, 3, 4, 5]

/*  Array.prototype.unshift() is often used to insert an array of values at the start of an existing array.
 Without spread syntax this is done as: */

var arr1111 = [0, 1, 2];
var arr2222 = [3, 4, 5];
// Prepend all items from arr2222 onto arr1111
Array.prototype.unshift.apply(arr1111, arr2222) // arr1111 is now [3, 4, 5, 0, 1, 2]

// With spread syntax, this becomes:

var arr33 = [0, 1, 2];
var arr44 = [3, 4, 5];
arr33 = [...arr44, ...arr33]; // arr33 is now [3, 4, 5, 0, 1, 2]



