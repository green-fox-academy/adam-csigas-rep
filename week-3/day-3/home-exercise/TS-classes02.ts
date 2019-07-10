export { };

class Car {

    private static SERIES_NUMBER = 0;

    private _seriesNumber: number;

    private _ownerName: string;

    constructor(public brandName: string) {
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }

    public startCar(): void {
        this._startEngine();
    }

    private _startEngine(): void {
    }

    public get seriesNumber(): number {
        return this._seriesNumber;
    }

    public get ownerName(): string {
        return this._ownerName;
    }

    public set ownerName(name: string) {
        // Do some validation on the name
        this._ownerName = name;
    }
}

let car = new Car('Mazda');
car.startCar();
car.ownerName = 'Slava';
console.log('Brand number:', car.brandName);
console.log('Series number:', car.seriesNumber);
console.log('Owner name:', car.ownerName);

let car2 = new Car('Mazda');
console.log('Brand number 2:', car2.brandName);
console.log('Series number 2:', car2.seriesNumber);
console.log('Owner name:', car2.ownerName);


/* Shortcut in code01:
public brandName: string;
    constructor(brandName: string){
        this.brandName = brandName;
    }

    constructor(public brandName: string){
    }
*/