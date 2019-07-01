
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];

/* let abcRev = abc.reverse();

console.log(abcRev);
 */

abc[3] = abc[0];
abc[0] = abc[2];
abc.splice(2, 1);
console.log(abc);

