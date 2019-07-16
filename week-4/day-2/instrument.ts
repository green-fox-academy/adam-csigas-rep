abstract class Instrument {
    abstract name: string;
    abstract play();

}
abstract class StringedInstrument extends Instrument {
    abstract numberOfStrings: number;
    play() { };

    sound() {
        this.play();
    }

}

export default StringedInstrument;

