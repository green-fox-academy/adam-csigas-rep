'use strict';
export { };

function average(numbers: number[]): number {
    console.log('yeey');
    if (numbers.length === 0) {
        throw Error('The array to average is empty');
    }
    console.log('do I reach this?')
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}


try {
    let a: number = average([]);
    console.log(a);
} catch (e) {
    console.log(e);
}

console.log('end');
