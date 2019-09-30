'use strict';

export abstract class Instrument {
  name: string;
  constructor(name) {
    this.name = name;
  }
  abstract play(): void;
}

export abstract class StringedInstruments extends Instrument {
  numberOfStrings: number;
  constructor(name, numberOfStrings) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): void;

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
}

export class ElectricGuitar extends StringedInstruments {

  constructor(numberOfString: number = 6) {
    super('Electric Guitar', numberOfString);
  }

  sound(): string {
    return 'Twang';
  }

}

export class BassGuitar extends StringedInstruments {

  constructor(numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }

}

export class Violin extends StringedInstruments {

  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
  }

  sound(): string {
    return 'Screech';
  }

}