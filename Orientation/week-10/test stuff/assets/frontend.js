'use strict';
//creating new audio element with "auto" preload and native "controls"

//let media = document.body.appendChild(document.createElement('audio'));
let media = document.querySelector('audio');

let events = ['loadstart','play','ended','progress','pause'];

for(let i = 0; i < events.length; i++){
    media.addEventListener(events[i],function(e){
        console.log(`${e.type} happened.`);
    })
}

/* const controlPanel = document.querySelector('controlpanel');
let media = document.createElement('audio');
let fooo = document.controlPanel.appendChild(media); */