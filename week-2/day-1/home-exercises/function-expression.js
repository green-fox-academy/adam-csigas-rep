// normal function statement

function sayHi(){
    console.log('hi');
}

sayHi();

//function expression: set up a variable which will be = to a function

var sayBye = function(){
    console.log('bye');
}

sayBye();

function callFunction (fun){
    fun();
}

callFunction(sayBye);