'use strict';

import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";
import { AircraftCarrier } from "./carrier";


let myf16 : F16 = new F16();
let myf35 : F35 = new F35();

console.log(myf35)

myf35.refill(12)
myf16.refill(12)
myf35.fight()
myf16.fight()
myf35.refill(12)
myf35.fight()
myf35.refill(12)
console.log(myf35)
console.log(myf16)
