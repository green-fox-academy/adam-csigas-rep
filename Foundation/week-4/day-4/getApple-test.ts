'use strict';
import { test } from 'tape';
import { appleMaker } from './getApple';

test(t => {
    let myApple: appleMaker = new appleMaker();
    myApple.getApple();
    t.equals(myApple.getApple(), "apple");
    t.end();
});