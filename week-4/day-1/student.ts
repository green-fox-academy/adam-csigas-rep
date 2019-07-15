'use strict';
import Person from './person';

class Student extends Person {

    previousOrganization: string;  //the name of the student’s previous company / school
    skippedDays: number;           //the number of days skipped from the course

    constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays: number) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    getGoal() {

    } //prints out "Be a junior software developer."

    introduce() {

    } //"Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."

    skipDays(numberOfDays) {

    } //increases skippedDays by numberOfDays
}

