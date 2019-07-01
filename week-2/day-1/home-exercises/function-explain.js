/* 
As a code is getting bigger and bigger it's getting harder and harder to know which part of the code performs
which actions. This is where function comes in the picture. You can create a section of codes and you can
call them later on whenever you want it, or find it easily if you want to update it.

*/

function getAverage(a,b){

    var average = (a+b) / 2;
    console.log(average);
    return average;

}

//it will not run on it's own, we have to call him

/* first level 
getAverage(7, 12);
*/

/* Second level :D */

var myResult = getAverage(7,8);
console.log("The average is " + myResult);
