'use strict';

let promise = new Promise(function(resolve,reject){
  setTimeout(() => reject(new Error('REJECTED!')), 300);
})

const onReject = function(error){
  console.log(error.message)
}

promise.then(null,onReject);

