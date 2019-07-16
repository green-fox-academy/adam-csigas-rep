'use strict';

function crazyWhatNot(): string | number {
    let random: number = Math.random();
    if (random < 0.5) {
        return "upsey"
    } else {
        return 1;
    }
}

let ppl: string[] = ['asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd',];

for (let name of ppl) {
    console.log(name);
}

//it works similar as forEach

ppl.forEach(person => {
    console.log(person);
})