'use strict';

let promise = new Promise(function(resolve,reject){
  setTimeout(() => reject(new Error('REJECTED!')), 300);
})

const onReject = function(error){
  console.log(error.message)
}

promise.then(null,onReject);

/* 
It works the same : 
promise.catch(onReject);

promise.then(console.log)
.catch(onReject)
*/