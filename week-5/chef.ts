'use strict';

import { Employee } from "./employee";

/* 

##### Chef

- It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)
- Whenever it is instructed to `work`:
  - It should increase its `experience` by `1`
- It should have a `cook` behavior
  - This should get the `name of the food` as an input
  - This should update the `meals` information so we are able to track that it cooked this specific food again

*/

class Chef implements Employee{
    name: string;
    experience : number;

    constructor(name : string = 'JonDoe', experience : number = 0){
        this.name=name;
        this.experience=experience;
    }

    work() {
        this.experience++;
    }
}