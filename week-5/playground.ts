'use strict';

//
let mystring: string = 'k.oc.ka.krum.pli.';
let myDestroy: any[] = ['k', /\./gi];
//let myNewstring02: string = '';

/* for (let i: number = 0; i < myDestroy.length; i++) {
    mystring.replace(myDestroy[i], "");
} */

let myNewstring: string = mystring.replace(myDestroy[0], "");
let myNewstring2: string = mystring.replace(myDestroy[1], "");

console.log(myNewstring2)

