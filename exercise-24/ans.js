const fs = require('fs');
const inputStr = fs.readFileSync('./names.txt', 'utf8');

const stringToAscii = (str) => {
    const strArr = str.split('')
    return strArr.map(s => s.charCodeAt(0));
};

// A: 1, B: 2, C: 3, ....
// Ascii => A: 65;
// so A: 65- 64 = 1
const charScore = (strAsciiArr) => {
    return strAsciiArr.map(ascii => ascii - 64);
}

const getWordScore = (word) => {
    const strAsciiArr = charScore(stringToAscii(word));

    return strAsciiArr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}

const getPositionScore = (names, word) => {
    return names.findIndex(n => n === word) + 1; // start at index: 0
};

const getScore = (names, word) => {
    return getWordScore(word) * getPositionScore(names, word);
};

console.log('============================');
const names = inputStr.split(',').map(n => n.replace(/\"/g, '')).sort();
console.log(names.length, '=> names', names);

console.log('getWordScore', getWordScore('COLIN'));
console.log('getPositionScore', getPositionScore(names, 'COLIN'));
console.log('getScore', getScore(names, 'COLIN'));
console.log('============================');

let total = 0;
const len = names.length;
for (let i = 0; i < len; i++) {
    const word = names[i];
    total += getScore(names, word);
}
console.log('total', total);
console.log('============================');