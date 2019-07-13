//Given base and n that are both 1 or more, compute recursively(no loops) the value of base to the n power, so powerN(3, 2) is 9.

'use strict';
export { };


function powerizer(base: number, n: number) {
    if (base === 0 || n === 0) {
        return 1;
    } else {
    } return (base * powerizer(base, n - 1))

}



console.log(powerizer(4, 1));

// it's not working with negative numbers yet.

