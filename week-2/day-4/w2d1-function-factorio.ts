
// -  Create a function called `factorio`
//    that returns it's input's factorial

// e.g.: 5! = 5*4*3*2*1;

export { };


/* function sum(N: number): number {
    let myNumbers: number[] = [];
    let neededThing: number = 1;

    for (let i: number = 1; i <= N; i++) {
        myNumbers.push(i);
    }

    for (let j: number = 0; j < myNumbers.length; j++) {
        neededThing *= myNumbers[j];
    }

    return neededThing
}
 */

/* let myNumbers: number[] = [];

function sum(N: number): number {
    let neededThing: number = 1;

    for (let i: number = 0; i <= N; i++) {
        myNumbers.push(i);
    }

    for (let j: number = 1; j <= N; j++) {
        neededThing *= myNumbers[j];
    }

    return neededThing
} */



function sum(N: number): number {
    let neededThing: number = 1;

    for (let j: number = 1; j < N; j++) {
        neededThing *= j;
    }

    return neededThing
}
console.log(sum(5)); // I have no clue whats going on here... 
console.log(sum(4)); // I have no clue whats going on here...
console.log(sum(3)); // I have no clue whats going on here... 
console.log(sum(6)); // I have no clue whats going on here... 
