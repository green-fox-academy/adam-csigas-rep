'use strict';

let test = require('tape')

import { NumberOperations } from './hopeitworks';

test('add 2 numbers', t => {
    const operations = new NumberOperations();

    var actual = operations.addNum(1, 2);
    var expected = 3;

    t.equal(actual, expected);
    t.end();
});
