'use strict';

let folderStructure = [
    'readme.md',
    [
        '1.ts',
        '2.ts',
        [
            'readme.md'
        ]

    ]

]

function countFiles(folder) {
    let count: number = 0;
    for (let i: number = 0; i < folder.length; i++) {
        if (typeof folder[i] === 'string') {
            count++;
        } else {
            count += countFiles(folder[i]);
        }
    }
    return count;
}

console.log(countFiles(folderStructure));