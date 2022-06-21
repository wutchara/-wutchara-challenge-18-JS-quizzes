console.log('============================');
// XX => X + 'ty' ('eight' + 'y' => eighty)
const words = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '15': 'fifteen',
    '20': 'twenty',
    '40': 'forty',
    '50': 'fifty',
};

// can be use string separation to specific digits
const splitNumber = (number) => {
    const result = [];
    let target = number;

    // XXX
    let temp = target / 100;
    if (temp > 0) {
        target = target % 100;
        result.push(Math.floor(temp));
    }

    // XX
    temp = target / 10;
    if (temp >= 0) {
        target = target % 10;
        result.push(Math.floor(temp));
    }

    // X
    result.push(Math.floor(target));

    return result;
}

const readNumber = (number) => {
    if (number > 1000) {
        return null;
    } else if(number === 1000) {
        return 'one thousand';
    }

    const andText = ' and ';
    let is3Digits = false;
    const numberArr = splitNumber(number);
    console.log('numberArr', numberArr);
    let result = '';
    if (numberArr[0] > 0) {
        is3Digits = true;
        result += words[numberArr[0] + ''] + ' hundred';
    }

    // find spacial in XX
    let temp = words[numberArr[1].toString() + numberArr[2].toString()];
    if (temp) {
        result += andText + temp;
    } else {
        let is2Digits = false;
        if (numberArr[1] > 0) {
            is2Digits = true;
            const numStr = numberArr[1] + '';
            const target = words[numStr + '0'] ? words[numStr + '0'] : words[numStr] + 'ty';
            result += andText + (target.endsWith('tty') && target.replace('tty', 'ty') || target);
        }

        if (numberArr[2] > 0) {
            result += (is2Digits ? '-' : '') + words[numberArr[2] + ''];
        }
    }

    return is3Digits ? result : result.replace(andText, '');
}
// console.log('23', readNumber(23));
// console.log('342', readNumber(342));
// console.log('115', readNumber(115));
// console.log('285', readNumber(285));
// console.log('940', readNumber(940));
// console.log('956', readNumber(956));
// console.log('100', readNumber(100));

const countNumberWord = (number) => {
    const words = readNumber(number);
    const len = words.replace(/( )|(-)/g, '').length;
    console.log(number, ':', words, ' => ', len);

    return len;
}

const countWordRange = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += countNumberWord(i);
    }

    return sum;
}

// console.log('countWordRange(1, 5)', countWordRange(1, 5));
console.log('countWordRange(1, 1000)', countWordRange(1, 1000));

console.log('============================');