'use strict';

const form = document.querySelector('form');
const url = document.getElementById('url');
const alias = document.getElementById('alias');

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(url.value, alias.value);
    fetch('/api/links',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            url : url.value,
            alias : alias.value
        })
    })
    //.then(response => response.json())
    .then(res => console.log(res.status))
});
