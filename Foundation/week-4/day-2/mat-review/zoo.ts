'use strict';

abstract class Animal {
    abstract makeSound(): string;
}

class Tiger extends Animal {
    makeSound(): string {
        return `This eagle tastes nice`;
    }
}

class Eagle extends Animal {
    makeSound(): string {
        return `I am not enjoying this`;
    }
}

let zoo: Animal[] = [];

// zoo.push(new Animal()); <-- you can not say that to an abstact class like animal
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());

zoo.forEach(animal => {
    console.log(animal.makeSound());
})