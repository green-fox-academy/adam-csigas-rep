'use strict';
export { };




let randomChar: string = '';

function genTest(codeLength: number) {

    for (let i: number = 0; i < codeLength; i++) {
        let randomDah: string = 'POIUZTREWQLKJHGFDSAMNBVCXY9876543210';

        randomChar += randomDah.charAt((Math.floor(Math.random() * randomDah.length)));
    } return console.log(randomChar);
}


genTest(8)