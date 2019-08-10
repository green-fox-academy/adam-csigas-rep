'use strict';

import { Carrier } from "./carrier";
import { F16 } from "./f16";
import { F35 } from "./f35";

let friendlyCarrier: Carrier = new Carrier(10000, 5000);
let enemyCarrier: Carrier = new Carrier(1, 10000);

let my1f16 : F16 = new F16();
let my2f16 : F16 = new F16();
let my3f16 : F16 = new F16();
let my4f16 : F16 = new F16();

let my1f35 : F35 = new F35();
let my2f35 : F35 = new F35();
let my3f35 : F35 = new F35();
let my4f35 : F35 = new F35();

friendlyCarrier.add(my1f16);
friendlyCarrier.add(my2f16);
friendlyCarrier.add(my3f16);
friendlyCarrier.add(my4f16);
friendlyCarrier.add(my1f35);
friendlyCarrier.add(my2f35);
friendlyCarrier.add(my3f35);
friendlyCarrier.add(my4f35);


console.log(friendlyCarrier.aircrafts)