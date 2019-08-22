/* 
filter() method creates a new array with all elements that pass the test implemented by the provided function.
array.filter (callback[, thisObject]);

callback − Function to test for each element.

thisObject − Object to use as this when executing callback.

*/

function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );