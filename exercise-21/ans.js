const {
    format,
    differenceInDays,
    differenceInMonths,
    addDays,
    addMonths,
} = require('date-fns');
const _ = require('lodash');

console.log('============================');

// 	iii	=> Mon, Tue, Wed, ..., Sun
const currentDate = format(new Date(), 'iii MM/dd/yyyy');
console.log('currentDate', currentDate, +format(new Date(), 'dd'));

const start = new Date(Date.UTC(1901, 0, 1)); // 1 Jan 1901
console.log('start', start, format(start, 'iii'));
const end = new Date(Date.UTC(2000, 11, 31)); // 31 Dec 2000
console.log('end', end, format(start, 'iii'));

const v1 = (start, end) => {
    const diff = differenceInDays(end, start);
    console.log('diff', diff, ' days');

    let count = 0;
    let curr = _.clone(start);
    for (let i = 0; i <= diff; i++) {
        curr = addDays(start, i);

        if ((+format(curr, 'dd') === 1) && format(curr, 'iii') === 'Sun') {
            count++;
        }
    }
    // console.log('count', count);

    return count;
};

const v2 = (start, end) => {
    const diff = differenceInMonths(end, start);
    console.log('diff', diff, ' months');

    let count = 0;
    let curr = _.clone(start);
    console.log('curr', curr);
    let isFirstDay = +format(curr, 'dd') === 1; // start at 1st

    // find the new current date
    if (!isFirstDay) {
        curr.setDate(1);
        curr = addMonths(curr, 1);
        console.log('curr', curr);
    }
    for (let i = 0; i <= diff; i++) {
        curr = addMonths(start, i);

        if (format(curr, 'iii') === 'Sun') {
            count++;
        }
    }
    // console.log('count', count);

    return count;
};

//  February 29
const leapYear = (year) => {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}


console.log('---- v1:', v1(start, end));
console.log('---- v2:', v2(start, end));

console.log('============================');