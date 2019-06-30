//spread syntax in array literals

var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]


// Copy an array

var arrr = [1, 2, 3];
var arrr2 = [...arrr]; // like arr.slice()
arrr2.push(4); 

// arrr2 becomes [1, 2, 3, 4]
// arrr remains unaffected