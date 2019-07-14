class Person {
    constructor(name) {
        console.log(name + ' Person constructor');
    }
}

class Employee extends Person {

}

let e = new Employee("Adam");