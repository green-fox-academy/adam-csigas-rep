'use strict';



/*     for(let i : number = 0; i <= 1000; i++){
    let randomnumber: number = Math.ceil(Math.random() * contestants.length);
    if (randomOrder.indexOf(randomnumber) === -1 && randomOrder.length !== contestants.length){
        randomOrder.push(randomnumber);
    }
    
} */

let randomOrder: number[] = [];
let contestants : string[] = ['zoli','bela','levi','sanyi','barni','adam'];
while( randomOrder.length !== contestants.length){
    let randomnumber: number = Math.ceil(Math.random() * contestants.length);
    if (randomOrder.indexOf(randomnumber) === -1) {
        randomOrder.push(randomnumber);
    }
}


