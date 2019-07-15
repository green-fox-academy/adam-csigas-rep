'use strict';
import Person from "./person";

class Mentor extends Person {
    level: string;

    constructor(name?: string, age?: number, gender?: string, level = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }
}