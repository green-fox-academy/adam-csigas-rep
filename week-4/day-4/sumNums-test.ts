'use strict';

import { test } from 'tape';
import { NumberSummer } from './sumNums';

test(t => {
    let emptyArray: NumberSummer = new NumberSummer([]);
    let oneElement: NumberSummer = new NumberSummer([113]);
    let beGoodRealTest: NumberSummer = new NumberSummer([10, 15, 20, 25]);
    t.equals(emptyArray.sum(), 0);
    t.equals(oneElement.sum(), 113);
    t.equals(beGoodRealTest.sum(), 70);

    t.end();
});
