console.log('============================');

// bad performance
const countDivisible_1 = (min, max, num) => {
    let count = 0;

    for (let i = min; i <= max; i++) {
        if ((i % num) === 0) {
            count++;
        }
    }

    return count;
};
console.log('countDivisible_1', countDivisible_1(1, 1000, 3));

// improve from #1
const countDivisible_2 = (min, max, num) => {
    let count = 0;
    let first = min;

    // find first
    for (let i = min + num; i <= max; i++) {
        if ((i % num) === 0) {
            count++;
            first = i;
            break;
        }
    }

    for (let i = first; i <= max; i += num) {
        count++;
    }

    return count;
};
console.log('countDivisible_2', countDivisible_2(1, 1000, 3));

const countDivisible_3 = (min, max, num) => {
    // a(n) = a(1) + (n-1)(d) => #1
    // [3, 6, 9, ..., 999]

    // find a(1)
    let a1 = min;
    for (let i = min; i <= max; i++) {
        if ((i % num) === 0) {
            a1 = i
            break;
        }
    }

    // find a(n)
    let an = max;
    for (let i = max; i >= min; i--) {
        if ((i % num) === 0) {
            an = i
            break;
        }
    }

    // resolve the equation => #1
    // n = ((a(n) - a(1))/d) + 1;

    return ((an - a1)/num) + 1;
};
// use mathematic
console.log('countDivisible_3', countDivisible_3(1, 1000, 3));
console.log('============================');