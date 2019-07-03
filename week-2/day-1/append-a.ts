// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

let animals2: string[] = ["koal", "pand", "zebr"].map(function (missingA) {
    return missingA + 'a';
})

console.log(animals2);
