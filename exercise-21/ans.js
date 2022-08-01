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

// TODO:
const v3 = () => {
    // 1 Jan 1900 was a Monday.
    // start => 1 Jan 1901 => Tue
    // end => 31 Dec 2000
    const start = {
        day: 1,
        month: 0, // Jan
        year: 1900,
    }

    const end = {
        day: 31,
        month: 11, // Dec
        year: 2000,
    }

    const dayInMonthNonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayInMonthLeapYear = [...dayInMonthNonLeapYear];
    dayInMonthLeapYear[1] = 29; // Fab
    let count = 0;
    let tempDate = 1; // Tue 1901/01/01


    for (let y = start.year; y <= end.year; y++) {
        const dayOfMonth = (leapYear(y)) ?  dayInMonthLeapYear : dayInMonthNonLeapYear;
        for (let m = 0; m < 12; m++) {
            tempDate += dayOfMonth[m];
            // sun: 6, mon: 0, tue: 1, wed: 2, tru: 3, fri: 4, sat: 5
            if (tempDate % 7 === 6) { // sunday
                tempDate = 6; // reset
                count++;
            }
        }
    }

    return count;
};


console.log('---- v1:', v1(start, end));
console.log('---- v2:', v2(start, end));
console.log('---- v3:', v3());

console.log('============================');