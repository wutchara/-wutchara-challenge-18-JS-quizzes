console.log('============================');

const findNextCollatz = (lastNumber) => {
    const result = [];

    if (lastNumber % 2 === 0) {
        result.push(lastNumber / 2);
    } else {
        const above = (3 * lastNumber) + 1;
        result.push(above, above / 2);
    }

    return result;
}

const findSequenceCollatz = (startNumber) => {
    const result = [startNumber];
    let last = startNumber;
    do {
        const next = findNextCollatz(last);
        result.push(...next);
        last = next[next.length - 1];
    } while (last !== 1);
    return result;
}

const findStarting = (len) => {
    let start = 1;
    let sequence = [];
    do {
        console.log('start', start, sequence.length);
        sequence = findSequenceCollatz(start++);
    } while (sequence.length < len);

    return {
        start: start - 1,
        sequence,
        len: sequence.length,
    }
}

const findStartingLess = (number) => {
    const result = {
        start: 1,
        sequence: [1],
        len: 1,
    };
    let start = 1;

    do {
        const sequence = findSequenceCollatz(start++);
        const sLen = sequence.length;
        console.log('start', start, sLen);
        if (sLen > result.len) {
            result.len = sLen;
            result.start = start - 1;
            result.sequence = sequence;
        }
    } while (start <= number);

    return result;
}

// console.log('findSequenceCollatz(13)', findSequenceCollatz(13));
// console.log('findSequenceCollatz(7)', findSequenceCollatz(7));

// console.log('findStarting(10)', findStarting(10));
// console.log('findStarting(100)', findStarting(100));
// console.log('findStarting(1000)', findStarting(1000));

// console.log('findStartingLess(10)', findStartingLess(10));
// console.log('findStartingLess(100)', findStartingLess(100));
console.log('findStartingLess(1000000)', findStartingLess(1000000));

console.log('============================');