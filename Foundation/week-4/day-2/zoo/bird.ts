'use strict';

import Animal from "./animal";
import { Flyable } from "../flyable/flyable"

class Bird extends Animal implements Flyable {
    name: string;
    age: number;
    gender: string;
    color: string;
    legs: number;

    constructor(name: string) {
        super();
        this.name = name;
    };

    breed(): string {
        return 'Laying eggs.';
    };

    land(): string {
        return
    }
    fly(): string {
        return
    }
    takeoff(): number {
        return
    }

}

export { Bird };