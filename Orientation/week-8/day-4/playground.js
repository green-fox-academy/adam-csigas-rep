'use strict';

let xCor = 0;
let yCor = 0;
let size = 200;


let up = document.querySelectorAll('button')[0];
let down = document.querySelectorAll('button')[1];
let left = document.querySelectorAll('button')[2];
let right = document.querySelectorAll('button')[3];
let zoomIN = document.querySelectorAll('button')[4];
let zoomOUT = document.querySelectorAll('button')[5];

//Zoom in
function zoomThePictureOUT() {
    document.querySelector('div').style.backgroundSize = `${size *= 0.8}%`;
}
zoomOUT.addEventListener("click", zoomThePictureOUT);

//Zoom out
function zoomThePictureIN() {
    document.querySelector('div').style.backgroundSize = `${size *= 1.2}%`;
}
zoomIN.addEventListener("click", zoomThePictureIN);

//Up
function moveThePictureUP() {
    document.querySelector('div').style.backgroundPositionY = `${yCor += 20}px`;
}
up.addEventListener("click", moveThePictureUP);

//Down
function moveThePictureDOWN() {
    document.querySelector('div').style.backgroundPositionY = `${yCor -= 20}px`;
}
down.addEventListener("click", moveThePictureDOWN);

//Left
function moveThePictureLEFT() {
    document.querySelector('div').style.backgroundPositionX = `${xCor += 20}px`;
}
left.addEventListener("click", moveThePictureLEFT);

//right
function moveThePictureRIGHT() {
    document.querySelector('div').style.backgroundPositionX = `${xCor -= 20}px`;
}
right.addEventListener("click", moveThePictureRIGHT);



