console.log('============================');
const fs = require('fs');

// init
const inputStr = fs.readFileSync('./grid.txt', 'utf8');
const numberStr = inputStr.replace('\r\n', '');
const numberArr = numberStr.split('').map(n => +n);

console.log('numberArr.length', numberArr.length);

const sum = numberArr.reduce((prev, current) => {
    return prev + current;
}, 0);
console.log('sum', sum);

console.log('First 10 digits: ', (sum + '').split('').slice(0, 10));

console.log('============================');