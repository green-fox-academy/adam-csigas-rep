'use strict';

export class Animal {
    ownersName : string;
    isHealthy : boolean;
    healCost : number;

    constructor(healcost: number, ownersName: string ='JonDoe', isHealthy: boolean = (Math.random() <= 0.5)){
        this.healCost = healcost;
        this.ownersName = ownersName;
        this.isHealthy = isHealthy;
    }

    heal(animalName : Animal){
         animalName.isHealthy === true;
    }

    isAdoptable(animalName : Animal) : boolean {
        let canIAdopt : boolean = true;
        if(animalName.isHealthy){
            return canIAdopt;
        }
        return canIAdopt = false;
    }
    
    toString(animalName : Animal) : string {
        let answerToAdopt : string = `${animalName} is healthy, and adoptable.`
        if(this.isAdoptable(animalName)){
            return answerToAdopt;
        }
        return answerToAdopt = `${animalName} is not healthy <heal cost> , and not adoptable.`
    }
}

let Cat: Animal = new Animal(Math.floor(Math.random()*7));
let Dog: Animal = new Animal(Math.floor(Math.random()*8)+1);
let Parrot: Animal = new Animal(Math.floor(Math.random()*7)+4);

console.log(Cat);
console.log(Dog);
console.log(Parrot);

