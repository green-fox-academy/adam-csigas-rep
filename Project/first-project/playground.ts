let mynumber: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

for (let i: number = 0; i < mynumber.length; i++) {
    for (let j: number = 0; j <= mynumber.length; j++) {
        console.log(i, j);
    }
}