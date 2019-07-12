import { Thing } from './07-thing';

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing): void {
        this.things.push(thing);
    }

    getThings(): Thing[] {
        return this.things;
    }
}

export { Fleet };