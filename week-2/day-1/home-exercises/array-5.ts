// don't really get it 


var contains=false;
function Contains(element, index, array) {
 
if (element == 1 || element == 2) {
contains = true;
}
 
return contains;
}
 
var retval = [2, 3, 9, 0, 4,66,54].some(Contains);