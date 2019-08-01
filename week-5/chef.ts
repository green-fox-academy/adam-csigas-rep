'use strict';

import { Employee } from "./employee";


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

console.log(myChef)