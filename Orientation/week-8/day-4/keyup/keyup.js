'use strict';

function keyCodeTeller(keypress) {
    const h1 = document.querySelector('h1');
    const pushedKey = keypress.keyCode || keypress.which;
    console.log(h1.innerText = `Last pressed key code is: ${pushedKey}`);
}

addEventListener('keypress', keyCodeTeller);