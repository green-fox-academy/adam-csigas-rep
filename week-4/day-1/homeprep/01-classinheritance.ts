'use strict';
export { };

class Person {
    constructor(name) {
        console.log(name + ' Person constructor');
    }
    getID() {
        return 10;
    }
}

class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(name + " Employee constructor");
    }
    getID() {
        return super.getID();
    }
}

let e = new Employee("Adam");
console.log(e.getID());

// if you do 2 classes, A,B and eg. in to the B one you put extends + A class' name, B will "inherit" the A's stuff, like constructor
// and constructors parameter