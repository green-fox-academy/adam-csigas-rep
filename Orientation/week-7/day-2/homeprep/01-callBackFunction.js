function mainFunction(callback){
    let someData = 'Here is some data';

    callback(someData);
}

mainFunction(function(a) {
    console.log(a);
});

mainFunction(function(b) {
    console.log(b);
});

// callback functions are A-syncrones functions, so if you have function A and function B , function B will only starts after function A is done.