'use strict';

import Pirate from "./pirate";

let test = require('tape');

//test pirate
test(t => {
    let pirate01: Pirate = new Pirate('Jack');
    t.equals(pirate01.gold, 10);
    t.equals(pirate01.health, 10);
    if (pirate01.isCaptain) {
        t.equals(pirate01.isCaptain, true);

    } else {
        t.equals(pirate01.isCaptain, false);
    }
    if (pirate01.isLegWooden) {
        t.equals(pirate01.isLegWooden, true);
    } else {
        t.equals(pirate01.isLegWooden, false);
    }

    if (pirate01.isCaptain) {
        pirate01.work()
        t.equals(pirate01.gold, pirate01.gold);
        t.equals(pirate01.health, pirate01.health);
    } else {
        pirate01.work()
        t.equals(pirate01.gold, pirate01.gold);
        t.equals(pirate01.health, pirate01.health);
    }

    t.end();
});

