'use strict';
export{};

let mealsAndTimes: object = {
    meal1: 1,
    meal2: 2,
    meal3: 3,
    meal4: 2,

}
mealsAndTimes['meal1'] ++;

if(mealsAndTimes['meal5']){
    console.log('it exists')
}else{
    console.log('not exists')
}