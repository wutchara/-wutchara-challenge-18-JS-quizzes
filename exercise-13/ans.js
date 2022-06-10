console.log('============================');
const fs = require('fs');

// init
const inputStr = fs.readFileSync('./grid.txt', 'utf8');

const rows = inputStr.split('\r\n');
const arrInput = rows.map(row => {
    const columns = row.split(' ');
    return columns.map(c => +c);
});

arrInput.forEach(row => {
    let str = '';
    row.forEach(column => {
        str += '  ' + column;
    });
    console.log(str);
});

const product = (result) => {
    return result.reduce((prev, current) => {
        return prev * current;
    });
};

const findLeftRight = (digit) => {
    let result = [];
    let sum = 0;
    const len = arrInput.length;
    for (let i = 0; i < len; i++) {
        const row = arrInput[i];
        const rowLen = row.length;
        for (let j = 0; j < rowLen - digit + 1; j++) {
            const res = [];
            for (let k = 0; k < digit; k++) {
                res.push(row[j+k]);
            }
            // console.log(...res);

            if (!res.includes(0)) {
                const tempSum = res.reduce((prev, current) => {
                    return prev + current;
                });
                if (tempSum > sum) {
                    sum = tempSum;
                    result = res;
                }
            }
        }
        break;
    }

    // console.log('sum', sum);
    // console.log('result', result);
    return result;
};

const findUpDown = (digit) => {
    let result = [];
    let sum = 0;
    const len = arrInput.length;
    const rowLen = len - digit + 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < rowLen; j++) {
            const res = [];
            for (let k = 0; k < digit; k++) {
                res.push(arrInput[j+k][i]);
            }
            // console.log(...res);

            if (!res.includes(0)) {
                const tempSum = res.reduce((prev, current) => {
                    return prev + current;
                });
                if (tempSum > sum) {
                    sum = tempSum;
                    result = res;
                }
            }
        }
        break;
    }
    return result;
}

const findDiagonally = (digit) => {
    let result = [];
    let sum = 0;
    const len = arrInput.length;
    const rowLen = len - digit + 1;
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < rowLen; j++) {
            const res = [];
            for (let k = 0; k < digit; k++) {
                res.push(arrInput[i+k][j+k]);
            }
            // console.log(...res);

            if (!res.includes(0)) {
                const tempSum = res.reduce((prev, current) => {
                    return prev + current;
                });
                if (tempSum > sum) {
                    sum = tempSum;
                    result = res;
                }
            }
        }
        break;
    }
    return result;
}

const findMaximum = (digit) => {
    const vertical = findUpDown(digit);
    const vSum = product(vertical);

    const horizontal = findLeftRight(digit);
    const hSum = product(horizontal);

    const diagonally = findDiagonally(digit);
    const dSum = product(diagonally);

    const result = [{
        vector: 'L => R',
        items: vertical,
        sum: vSum
    },{
        vector: 'U => D',
        items: horizontal,
        sum: hSum
    },{
        vector: 'D => D',
        items: diagonally,
        sum: dSum
    }];

    const maximum = Math.max(vSum, hSum, dSum);
    return result.find(r => r.sum === maximum);
};

// console.log('L => R === ', findLeftRight(4));
// console.log('U => D === ', findUpDown(4));
// console.log('diagonally === ', findDiagonally(4));
console.log('Result', findMaximum(4));

console.log('============================');