// function callback

setTimeout(function() {
    console.log('The function iwas valled back.');
}, 3000);

// eventlisteners'
let btn = document.querySelector('#item1');

btn.addEventListener('click',function(e){
    console.log('The button was clicked.');
});
