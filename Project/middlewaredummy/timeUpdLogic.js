/*
update based on timestamp difference:
- Since we want to update our resources in every minute (!!!),
we have to check how many seconds past between the 2 timestamps
(updatedAt,actual)
- based on the difference we can calculate how much resources we
have to add (actual - updatedAt) / 60))
- Most of the time we will have some extra seconds. that value
has to be substracted from the actual timestamp and that value will
be the updatedAt value.
*/
let updatedAt = 1570438712218; //milisecondbased timestamp. we will get this data from db
let time = Date.now();
let amount = 0;
let generation = 1;

let difference = (time - updatedAt); //ms
let remainder = difference %60000;
let passedMinutes = (difference - remainder) / 60000;
updatedAt = time - remainder;
amount += generation * passedMinutes;
console.log(time);
console.log(difference)
console.log(updatedAt)
console.log(remainder)
console.log(passedMinutes)
console.log(amount)

//!! iff passedminutes less than 1!!!