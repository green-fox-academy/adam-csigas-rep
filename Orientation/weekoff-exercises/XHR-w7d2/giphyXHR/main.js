'use strict';

const xhr = new XMLHttpRequest();
const createImages = (giphyArray) => {
    giphyArray.forEach(element => {
        let newImg = document.createElement('img');
        newImg.src = element.images.original.url;
        document.body.appendChild(newImg);
    });
}

let parsedResult = {};
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            parsedResult = JSON.parse(xhr.responseText);
            createImages(parsedResult.data);
        }
        else {
            console.log('something went wrong');
        }
    }
}
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=ZzVuWxRkofid42aP57nA1OxUn3dGxBha&q=funny&limit=5&offset=0&rating=G&lang=en');
xhr.send();
