
//set timer calls the function ones

let myMessage = document.getElementById("message");
function showMessage() {
    myMessage.className = "show";
};
setTimeout(showMessage, 3000);

//-------------------------------------//

// set interval call it multiple times

let colourChanger = document.getElementById("colour-changer");
let colours = ["red", "blue", "green", "pink"];
let counter = 0; //which position we are in with the colours

//function which change the color

function changeColour() {

    if(counter >= colours.length){
        counter = 0;
    }

    colourChanger.style.background = colours[counter];
    counter++;

}

let myTimer = setInterval(changeColour, 3000); //first the function we want to call, second how often

// stop timer

colourChanger.onclick = function(){

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";

};