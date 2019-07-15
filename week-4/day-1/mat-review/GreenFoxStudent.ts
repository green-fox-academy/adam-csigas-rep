import Person from './Person'

class GreenFoxStudent extends Person {
    gitHubUsername: string;
    frustrationLevel: number;

    constructor(name: string, age: number, height: number, gitHubUsername: string) {
        super(name, age, height);
        this.gitHubUsername = gitHubUsername;

    }

    socialize() {
        console.log('You betrayed the law...LAAAAW')
    }
}

const sandor: GreenFoxStudent = new GreenFoxStudent('Sandor', 25, 185, '');
sandor.socialize();

console.log(sandor instanceof Person);

const averageJoe: Person = new Person('John', 25, 180);

export default GreenFoxStudent;