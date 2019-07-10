/* Create a Counter class
    which has an integer property
when creating it shoul - this.integer value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {
    integer: number;

    constructor(counterant?: number) {
        if (counterant === undefined) {
            this.integer = 0;
        } else this.integer = counterant;
    }

    addIT(addThisNumber: number): number {
        this.integer += addThisNumber;
        return this.integer;
    }

    increaseIT(): number {
        this.integer++;
        return this.integer;
    }

    getIT(): string {
        console.log('The current value of your magic is ' + this.integer + '.');
        return;
    }

    reset(): number {
        this.integer = 0;
        console.log('Your magic has been reset. Your new magic value is ' + this.integer + '.');
        return
    }

}

let testThing: Counter = new Counter(); //with 0

console.log(testThing);
testThing.addIT(43);
console.log(testThing);
testThing.increaseIT();
console.log(testThing);
testThing.getIT();
testThing.reset();

let testThing2: Counter = new Counter(44); //with one given number

console.log(testThing2);
testThing2.addIT(43);
console.log(testThing2);
testThing2.increaseIT();
console.log(testThing2);
testThing2.getIT();
testThing2.reset();