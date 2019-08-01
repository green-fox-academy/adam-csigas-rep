'use strict';

import { Employee } from "./employee";

/* 

##### Chef

- It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)
- Whenever it is instructed to `work`:
  - It should increase its `experience` by `1`
- It should have a `cook` behavior
  - This should get the `name of the food` as an input
  - This should update the `meals` information so we are able to track that it cooked this specific food again



*/

class Chef extends Employee{
    mealsAndTimes : object ={};

    constructor(name: string = 'JonDoe', experience: number = 0){
        super()
        this.name=name;
        this.experience=experience;
        

    }

    work() : void {
        this.experience++;
    }

    meal(NameOfMeal : string) : object {
        if(this.mealsAndTimes[NameOfMeal]){
            this.mealsAndTimes[NameOfMeal]++;
        }else{
            this.mealsAndTimes[NameOfMeal] =1;
        }
        
        return this.mealsAndTimes;
    }

}

let myChef : Chef = new Chef();

console.log(myChef.meal('paprikaskrumpli'));
console.log(myChef.meal('paprikaskrumpli'));
console.log(myChef.meal('paprikaskrumpli'));