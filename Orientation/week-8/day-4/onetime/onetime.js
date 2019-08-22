'use strict';
let btn = document.querySelector('button');
let counter = 0;
btn.addEventListener('click', createTimestamp);


function createTimestamp() {
    let date = Date.now();
    console.log(date);
    counter++;
    
    if(counter === 1){
        btn.removeEventListener("click", createTimestamp,false);
    }
}



