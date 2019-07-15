'use strict';
import Person from "./person";

class Mentor extends Person {
    level: string;

    constructor(name?: string, age?: number, gender?: string, level = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    getGoal() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
    }
}

/*
fields:
level: the level of the mentor (junior / intermediate / senior)
methods:
getGoal(): prints out "Educate brilliant junior software developers."
introduce(): "Hi, I'm name, a age year old gender level mentor."
*/