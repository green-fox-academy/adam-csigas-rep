'use strict';

let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

let myReq = function () {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("something went wrong Captain!");
        }
    };

    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.removeEventListener("click", myReq);
    }
}

btn.addEventListener("click", myReq);

function renderHTML(data) {
    let htmlString = '';
    for (let i = 0; i < data.length; i++) {
        htmlString += '<p>' + data[i].name + `is a ${data[i].species}` + ' that likes '
        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += ` and ${data[i].foods.likes[j]}`;
            }
        }
        htmlString += '.</p>';
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
