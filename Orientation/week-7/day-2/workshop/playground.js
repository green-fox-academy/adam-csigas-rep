let words = ['map', 'reduce', 'filter'];

let splittedWords = [];
for (let i = 0; i < words.length; i++) {
    let splittedChar = [];
    for (let j = 0; j < words[i].length; j++) {
        if (j % 2 == 0) {
            splittedChar.push(words[i][j]);
        }
    }
    splittedWords.push(splittedChar.join(''))
}

console.log(splittedWords)