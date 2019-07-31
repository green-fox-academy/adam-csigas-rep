'use strict';

//
let mystring: string = 'k.oc.ka.krum.pli.';
let myDestroy: any[] = ['k', /\./gi];

let myNewstring: string = mystring.replace(/\./gi, "");

console.log(myNewstring)

