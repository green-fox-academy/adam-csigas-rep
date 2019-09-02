'use strict';

let promise1 = Promise.resolve('SECRET VALUE1');
let promise2 = Promise.reject(new Error('SECRET VALUE2'));

let errorcatcher = function(error){
  console.log(error.message);
}

promise1.then(console.log);
promise2.catch(errorcatcher);