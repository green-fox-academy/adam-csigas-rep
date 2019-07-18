'use strict';

import square from "./unit-test";
import { test } from 'tape';

test(t => {
    t.equals(square(3), 9);
    t.equals(square(1), 1);
    t.equals(square(5), 25);
    t.end();
})


