'use strict';

export class Animal {
    animalsName: string;
    ownersName : string;
    isHealthy : boolean;
    healCost : number;

    constructor(healcost: number, animalsName: string = 'Animal', ownersName: string ='JonDoe', isHealthy: boolean = (Math.random() <= 0.5)){
        this.healCost = healcost;
        this.animalsName = animalsName;
        this.ownersName = ownersName;
        this.isHealthy = isHealthy;
    }

    heal(){
      this.isHealthy = true;
    }

    isAdoptable() : boolean {
        let canIAdopt : boolean = true;
        if(this.isHealthy){
            return canIAdopt;
        }
        return canIAdopt = false;
    }
    
    toString() : string {
        let answerToAdopt : string = `${this.animalsName} is healthy, and adoptable.`
        if(this.isAdoptable()){
            return answerToAdopt;
        }
        return answerToAdopt = `${this.animalsName} is not healthy, for this reason not adoptable. The healing will cost: ${this.healCost} $ in total.`
    }
}

let Cat: Animal = new Animal(Math.floor(Math.random()*7),'Cat');
let Dog: Animal = new Animal(Math.floor(Math.random()*8)+1,'Dog');
let Parrot: Animal = new Animal(Math.floor(Math.random()*7)+4,'Parrot');

console.log(Cat);
console.log(Dog);
console.log(Parrot);

console.log(Cat.isAdoptable());
console.log(Dog.isAdoptable());
console.log(Parrot.isAdoptable());

console.log(Cat.toString());
console.log(Dog.toString());
console.log(Parrot.toString());

console.log(Cat.heal());
console.log(Dog.heal());
console.log(Parrot.heal());

console.log(Cat);
console.log(Dog);
console.log(Parrot);
