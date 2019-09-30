'use strict';

interface Santa {
    readonly numberOfKidsToVisit : number;
    weight? : number;
    giveGift(callback : GiftGivenCallback) : void;
    drinkMilk?() : void;
}



interface GiftGivenCallback {
    (success : boolean) : void;
}

let santa : Santa = {
    numberOfKidsToVisit: 43432,
    giveGift: (callback: GiftGivenCallback) => {
        callback(true);
    }
}

let numberOfKidsToVisit = 
    santa.numberOfKidsToVisit;

