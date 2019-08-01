'use strict';

import { Employee } from "./employee";

/* ##### Manager

    - It should have a`moodLevel` - in the beginning this is`400`
        - Whenever it is instructed to`work`:
- It should increase the`experience` by`1`
    - It should invoke its`have a meeting` behaviour
        - Whenever`have a meeting` is invoked, the`moodLevel` should decrease by the managers`experience`
 */

 class Manager extends Employee {
    moodLevel : number = 400;

     constructor(name: string = 'JonDoe', experience: number = 0) {
         super()
         this.name = name;
         this.experience = experience;
     }

     work() : void {
         this.experience++;
     }

     meeting() : void {
         this.moodLevel -= this.experience;
     }
 }

 let myManager: Manager = new Manager();

 myManager.work();
 myManager.meeting();
 console.log(myManager);
myManager.meeting();
 console.log(myManager);
myManager.meeting();
 console.log(myManager);