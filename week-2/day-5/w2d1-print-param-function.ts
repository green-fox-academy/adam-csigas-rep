// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

export { };

let myParameters: any[] = [];

function printParams(inputParameterA: any, inputParameterB: any, inputParameterC: any): Array<any> {

    myParameters.push(inputParameterA, inputParameterB, inputParameterC);

    return myParameters
}

console.log(printParams(142, true, 'banana'));