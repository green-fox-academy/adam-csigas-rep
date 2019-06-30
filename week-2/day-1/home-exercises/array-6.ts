// The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.
// without index:

let arr : string[] = ['apple','orange','pear'],
	found = false;

for(let i : number = 0, l = arr.length; i< l; i++){
	if(arr[i] === 'orange'){
		found = true;
	}
}

console.log("found:",found);

// with index:

let arr2 : string [] = ['apple','orange','pear'];

console.log("found:", arr2.indexOf("orange") != -1);