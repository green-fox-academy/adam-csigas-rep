/* Create a Pirate class.While you can add other fields and methods, you must have these methods: -

    - die() - this kills off the pirate, in which case, DrinkSomeRum, etc.just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1 / 3 chance, 1 dies, the other dies or they both pass out.

    And... if you get that far...

Add a parrot. */

'use strict';
export { };

class Pirate {

    inToxicate: number = 0;

    drinkSomeRum(): number {
        this.inToxicate++;
        return this.inToxicate;
        //toxicate pirate
    }

    howsItGoingMate() {
        if (this.inToxicate < 4) {
            console.log('Pour me anudder!');
        } else console.log('Arghh, I\'ma Pirate.How d\'ya d\'ink its goin ?');
        //if-else state : either tell you "Pour me anudder!" or "Arghh, I'ma Pirate. How d'ya d'ink its goin?" <- with this he passes out drink goes off
    }

    die(): Pirate {

        return
        //this kills the pirate
    }
    brawl() {
        //in case 2 of the pirates alive, they start to fight : 1/3 chance one of the pirate will die, 1/3 chance that they both pass out
    }

    Parrot() {
        //what does the parrot say?
    }
}

let Pirate1: Pirate = new Pirate();

console.log(Pirate1);
Pirate1.drinkSomeRum();
Pirate1.drinkSomeRum();
Pirate1.drinkSomeRum();
Pirate1.howsItGoingMate();
console.log(Pirate1);
Pirate1.drinkSomeRum();
Pirate1.howsItGoingMate();

Pirate1 = undefined;
console.log(Pirate1)
