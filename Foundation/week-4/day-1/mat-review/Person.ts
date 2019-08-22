'use strict';

class Person {
    name: string;
    age: number;
    height: number;

    constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    askMeHowIAm() {
        console.log(`well I've been better`);
    }

    socialize() {
        console.log(`I'm seeing my friends every day`);
    }
}

const avarageJoe: Person = new Person('John', 25, 180);

avarageJoe.askMeHowIAm();


export default Person;