/* Create a Pirate class.While you can add other fields and methods, you must have these methods: -

    drinkSomeRum() - intoxicates the Pirate some
howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called: -
    0 to 4 times, "Pour me anudder!"
else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc.just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1 / 3 chance, 1 dies, the other dies or they both pass out.

    And... if you get that far...

Add a parrot. */

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

    die() {
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
