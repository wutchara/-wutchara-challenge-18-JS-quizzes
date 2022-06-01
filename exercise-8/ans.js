console.log('============================');

const sof = (max) => {
    let total = 0;
    for (let i = max; i > 0; i--) {
        total += Math.pow(i, 2);
    }
    return total;
}

const sos = (max) => {
    let total = 0;
    for (let i = max; i > 0; i--) {
        total += i;
    }

    return Math.pow(total, 2);
};

const diff = (max) => {
    return Math.abs(sos(max) - sof(max));
};

console.log('[1,2,3,..., 10]', diff(10));
console.log('[1,2,3,..., 100]', diff(100));

console.log('============================');