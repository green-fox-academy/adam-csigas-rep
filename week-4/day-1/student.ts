'use strict';
import Person from './person';

class Student extends Person {

    previousOrganization: string;  //the name of the student’s previous company / school
    skippedDays: number;           //the number of days skipped from the course

    constructor(name?: string, age?: number, gender?: string, previousOrganization = "School of life", skippedDays = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }
    /* 
    The Student class has the following constructors:
    
    Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
    Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0
    
    */

    getGoal() {
        console.log("Be a junior software developer.");
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
    }

    skipDays(numberOfDays: any) {
        this.skipDays += numberOfDays;

    } //increases skippedDays by numberOfDays
}
