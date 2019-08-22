'use strict';

import Animal from "./animal";

class Reptile extends Animal {
    name: string;
    age: number;
    gender: string;
    color: string;
    legs: number;

    constructor(name: string) {
        super();
        this.name = name;
    }
    breed(): string {
        return 'Laying eggs.';
    };
}

export default Reptile;