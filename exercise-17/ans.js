console.log('============================');

const fact = (num) => {
    // if (num < 2) {
    //     return 1;
    // }
    let result = 1;

    // return num * fact(num)
    for (let i = num; i > 1; i--) {
        result *= i;
    }

    return result;
}
console.log('2!', fact(2));
console.log('5!', fact(5));

// Lattice Paths
const latticePaths = (gridSize) => {
    const x = fact(gridSize);

    return (fact(gridSize*2)) / (x*x);
}
console.log('Paths of 2x2: ', latticePaths(2));
console.log('Paths of 20x20: ', latticePaths(20));

console.log('============================');