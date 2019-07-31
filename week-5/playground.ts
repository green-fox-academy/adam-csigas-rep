'use strict';
let mystring: string = 'k.oc.ka.krum.pli.';




function deleteCharacter(): string {
    let mystring: string = 'k.oc.ka.krum.pli.';
    let myDestroy: RegExp[] = [/k/gi, /\./gi];
    for (let i: number = 0; i < myDestroy.length; i++) {
        mystring = mystring.replace(myDestroy[i], "");
    }
    return mystring;
}

console.log(deleteCharacter());



/* let myNewstring: string = mystring.replace(myDestroy[0], "");
let myNewstring2: string = mystring.replace(myDestroy[1], "");

console.log(myNewstring2) */

