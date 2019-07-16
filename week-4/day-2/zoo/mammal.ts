'use strict';

import Animal from "./animal";

class Mammal extends Animal {
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
        return 'Pushing out little ones.';
    };
}

export default Mammal;