'use strict';

import { Employee } from "./employee";
import { Chef } from "./chef";
import { Waiter } from "./waiter";
import { Manager } from "./manager";


class Restaurant {
    name: string;
    foundationYear: number;
    employees: (Chef | Waiter | Manager)[] = [];

    constructor(name: string = 'Rest-aurant',foundationYear : number = 2010){
        this.name=name;
        this.foundationYear= foundationYear;
    }

    guestsArrived() : void {
       this.employees.forEach(element => {
        element.work();
       });
    }

    hire(newWorker: Chef | Waiter | Manager) : void {
        this.employees.push(newWorker);
    }
}

let mahRestaurant : Restaurant = new Restaurant();

let myWaiter : Waiter = new Waiter();
let myChef : Chef = new Chef();
let myManager : Manager = new Manager();

console.log(mahRestaurant)
console.log(myWaiter)

mahRestaurant.hire(myWaiter);
mahRestaurant.hire(myChef);
mahRestaurant.hire(myManager);

console.log(mahRestaurant);

mahRestaurant.guestsArrived();
console.log(mahRestaurant);
