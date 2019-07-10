class Cookie {
    shape: string;                  // this is a field. the property will be the value oft the 
    hasSparkles: boolean;
    flavor: string;
    id: number;
    static lastId: number = 1;
    private status: string;

    bakeMe(): void {
        this.status = 'baked to perfection';
    }

    //how to make status accessable

    checkMyStatus(): string {
        return this.status;
    }

    static howAreYouToday(mood: string): string {
        return 'I am doing ${mood}';
    }

    constructor(shape?: string, hasSparkles?: boolean, flavor?: string) {  // .this is a reference and it works in object only
        this.shape = shape;
        this.hasSparkles = hasSparkles;
        this.flavor = flavor;
        this.id = Cookie.lastId;
        Cookie.lastId++;
    }

}

let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla'); // this is also called instance
let mySecondCookie: Cookie = new Cookie('spider', true, 'chocolate');
myFirstCookie.bakeMe();
console.log(myFirstCookie);

console.log(Cookie.howAreYouToday('exceptional'));

Math.random();
Math.PI;

//single responsibility principal: one class do one method

// static e.g

class Dog {
    static animalType: string = 'mammals';
    private stomach: any;
    eat(food: Object): void {
        this.stomach.food += food;
    }
}

let furkesz: Dog = new Dog();
furkesz.eat({ yummy: 'yummy' });

export default Cookie;