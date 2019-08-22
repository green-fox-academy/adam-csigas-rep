'use strict';

let originalNames : string [] = ["Captain Marvel", "Winter Soldier", "Black Panther", "Mark"];

function filterNamesLongerThan5(names: string[]): string[] {
    let filteredNames: string[] = [];
    for(let index: number = 0; index < names.length; index++){
        if(names[index].replace(" ","").length > 5){
            filteredNames.push(names[index]);
        }
    }
    return filteredNames;
}
console.log(filterNamesLongerThan5(originalNames));
