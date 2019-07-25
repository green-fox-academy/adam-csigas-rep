

import { Pokemon } from './w3d3-Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

/* console.log(wildPokemon.type)
initializePokemon();
console.log(pokemonOfAsh[0]);
console.log(pokemonOfAsh[0].isEffectiveAgainst(wildPokemon));
console.log(pokemonOfAsh[2].isEffectiveAgainst(wildPokemon)); */


/* function isAffective(): string {
    for (let i: number = 0; i < pokemonOfAsh.length; i++) {
        if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon) === true) {
        }
        return `${pokemonOfAsh[i]} is affective against ${wildPokemon.name}`
    }
} */

for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    console.log(pokemonOfAsh[i].isEffectiveAgainst(wildPokemon));
}
