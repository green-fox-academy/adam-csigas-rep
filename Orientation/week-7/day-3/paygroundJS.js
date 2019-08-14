let myfuk = {
    array1 : ['a','b','c'],
    array2 : ['aa','bb','cc']
}


let array3 = [];
for(let i = 0; i < myfuk.array1.length; i++){
    array3.push(myfuk.array1[i])
    array3.push(myfuk.array2[i])
}

console.log(array3)