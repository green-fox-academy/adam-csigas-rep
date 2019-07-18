'use strict';

export class appleMaker {

    getApple(): string {
        return `apple`;
    }
}

let myApple: appleMaker = new appleMaker();

console.log(myApple.getApple());

