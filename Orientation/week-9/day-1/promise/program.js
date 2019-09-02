'use strict';

let promise = new Promise(function (resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})

const onRejected = function (error) {
    console.log(error.message);
}

promise.then(console.log, onRejected);