/* The filter() method creates a new array with all elements that pass 
the test implemented by the provided function. */

let arr3 : any = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
    
let newArr3 : any = arr3.filter(function(item){
    return item.name === "orange";
});


console.log("Filter results:",newArr3);