'use strict';

import Pirate from "./pirate";

let test = require('tape');

test(t => {
    let pirate01: Pirate = new Pirate('Jack');
    t.equals(pirate01.gold, 10);
    t.equals(pirate01.health, 10);
    t.equals(pirate01.isCaptain, true);
    t.equals(pirate01.isCaptain, false);
    t.equals(pirate01.isLegWooden, true);
    t.equals(pirate01.isLegWooden, false);

    t.end();
});