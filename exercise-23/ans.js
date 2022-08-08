console.log('============================');

const properDivisor = (num) => {
    // find divisors
    const last = Math.ceil(num / 2);
    const res = [1];
    for (let i = 2; i <= last; i++) {
        if (num % i === 0) {
            res.push(i);
        }
    }

    // console.log('res', res);

    return res.reduce((p, c) => (p + c), 0);
}
console.log('proper divisor:220: ', properDivisor(220));
console.log('proper divisor:284: ', properDivisor(284));

console.log('proper divisor: 10000: ', properDivisor(10000));
console.log('proper divisor: 14211: ', properDivisor(14211));
// let last = 13325;
// do {
//     const temp = properDivisor(last++);
//     console.log(last, temp);
//     if (temp === 10000) {
//         break;
//     }
// } while (true);

console.log('============================');