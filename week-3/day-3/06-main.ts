import { Pokemon } from './06-Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?


function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Squirtle', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

let whoIsThis: Pokemon = new Pokemon('sarmander', 'fire', 'leaf');

//whoIsThis.isEffectiveAgainst('Oddish')




//console.log('I choose you, ');

//as a solution I would call the method from pokemon class but it's missing and I don't know why?!