'use strict';

let lineCount: number = 10;

for (let i: number = 0; i <= lineCount; i++) {
    if (i === 0 || i === lineCount) {
        console.log(Array(lineCount + 1).join('%'));
    } else {
        console.log(Array(lineCount - lineCount + 2).join('%') + Array(lineCount - 1).join(' ') + Array(lineCount - lineCount + 2).join('%'));
    }
}

