'use strict';

export abstract class Animal {
    private name: string;
    age: number;
    sex: string;

    constructor(name: string = 'cutie', age: number = 0, sex: string = 'unknown') {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    getName(): string {
        return this.name;
    };

    abstract breed(): string;

    abstract makeSound(): string;

}

export class Mammal extends Animal {
    hasfurry: boolean;
    numberOfLegs: number;

    constructor(name: string = 'default mammal name', age: number = 0,
        sex: string = 'unknown', furry?: boolean, numoflegs?: number) {
        super(name, age, sex);
        this.hasfurry = furry;
        this.numberOfLegs = numoflegs;
    }

    breed(): string {
        return 'pushing miniature versions out.';
    }

    makeSound(): string {
        return 'Most mammal sound ever';
    }
}

export class Reptile extends Animal {
    isScary: boolean;
    numberOfLegs: number;

    constructor(name: string = 'default reptile name', age: number = 0, sex: string = 'unknown',
        scary?: boolean, numoflegs?: number) {
        super(name, age, sex);
        this.isScary = scary;
        this.numberOfLegs = numoflegs;
    }

    breed(): string {
        return 'laying eggs.';
    }

    makeSound(): string {
        return 'Hisssss';
    }
}

export class Bird extends Animal {
    canFly: boolean;
    numberOfWings: number;

    constructor(name: string = 'default bird name', age: number = 0, sex: string = 'unknown',
        canfly?: boolean, numofwings?: number) {
        super(name, age, sex);
        this.canFly = canfly;
        this.numberOfWings = numofwings;
    }

    breed(): string {
        return 'layig eggs.';
    }

    makeSound(): string {
        return 'Singing rude stuff at eachother.';
    }
}