abstract class Animal {
    abstract name: string;
    abstract age: number;
    abstract gender: string;
    abstract color: string;
    abstract legs: number;

    getName(): string {
        return this.name;
    };

    abstract breed(): string;
}

export default Animal;