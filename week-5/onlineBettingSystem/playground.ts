'use strict';


let randomOrder: number[] = [];
    for(let i : number = 0; i <= 1000; i++){
        let randomnumber: number = Math.ceil(Math.random() * 6);
        if (randomOrder.indexOf(randomnumber) === -1 && randomOrder.length !== 6){
            randomOrder.push(randomnumber);
    }

}

console.log(randomOrder);

