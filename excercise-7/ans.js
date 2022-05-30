console.log('============================');

// const findPrimeNumberSet = (max) => {
//     const result = [2, 3];
//     let len = result.length;
//     if (max < 2) {
//         return [];
//     } else {
//         for (let i = result[1]; i < max; i += 2) {
//             // test divided
//             // find the next prime number
//             let isPrime = true;
//             for (let j = 0; j < len; j++) {
//                 if (i % result[j] === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }

//             if (isPrime) {
//                 result.push(i);
//                 len++;
//             }
//         }
//         return result;
//     }
// };

// const findSmallestNumber = (max) => {
//     const primeNumberSets = findPrimeNumberSet(max);
//     let len = primeNumberSets.length;
//     console.log('len', len);
//     if (primeNumberSets[len - 1] !== max) {
//         primeNumberSets.push(max);
//     }

//     let result = max;

//     do {
//         console.log('result', result);
//         // check all prime number
//         let isNotFinished = false;
//         for (let i = 0; i < len; i++) {
//             console.log('isNotFinished', isNotFinished, primeNumberSets[i]);
//             if (result % primeNumberSets[i] !== 0) {
//                 isNotFinished = true;
//                 break;
//             }
//         }

//         if (!isNotFinished) {
//             break;
//         }

//         // find new result
//         result = result + 1; // 2 * 3
//     } while (true);

//     return result;
// };

// // [1, 2, 3, ..., 9, 10]
// // [1(1), 2, 3, 4(2), 5, 6(2), 7, 8(2), 9(3), 10(2)]
// // [2, 3, 5, 7]
// console.log('[1, 10] => ', findSmallestNumber(10));


const getFullLists = (max) => {
    const result = [];
    for (let i = max; i > 1; i--) { // (1, max]
        result.push(i);
    }

    return result;
};

// bad performance
const findSmallestNumber2 = (max, numberSets) => {
    const len = numberSets.length;
    console.log('numberSets', numberSets);

    let result = max - 1;
    let isFinished = false;
    do {
        isFinished = true;
        result++;
        // console.log('result', result);
        for (let i = 0; i < len; i++) {
            if (result % numberSets[i] !== 0) {
                isFinished = false;
                break;
            }
        }
    } while (!isFinished);

    return result;
};

const checkResult = (result, max) => {
    const lists = getFullLists(max);
    const len = lists.length;
    let testResult = true;

    for (let i = len - 1; i >= 0; i--) {
        const divided = lists[i];
        if (result % divided !== 0) {
            testResult = false;
            break;
        }
    }

    return testResult;
};


// console.log('[1, 10] => ', findSmallestNumber2(10, getFullLists(10)), checkResult(2520, 10));
// console.log('[1, 20] => ', findSmallestNumber2(20, getFullLists(10)), checkResult(232792560, 20));

// const checkPrime = (number) => {
//     let isPrime = true;

//     if ([1, 2, 3].includes(number)) {
//         return isPrime;
//     }

//     if (number % 2 === 0 || number % 3 === 0) {
//         return false;
//     }

//     let divided = 5;
//     // [5, number)
//     for (let i = 5; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     return isPrime;
// }

// improve version of getLists
const getLists = (max) => {
    const result = [];
    for (let i = max; i > 1; i--) { // (1, max]
        const len = result.length;
        let isNew = true;

        if (len) {
            for (let j = 0; j < len; j++) {
                // the new number can divide
                if (result[j] % i === 0) {
                    isNew = false;
                    break;
                }
            }
        }


        // check dividable
        isNew && result.push(i);
    }

    return result;
}

// console.log('getFullLists:10', getFullLists(10));
// console.log('getLists:10', getLists(10));


// console.log('getFullLists:20', getFullLists(20));
// console.log('getLists:20', getLists(20));

console.log('[1, 10] => ', findSmallestNumber2(10, getLists(10)), checkResult(2520, 10));
console.log('[1, 20] => ', findSmallestNumber2(20, getLists(20)), checkResult(232792560, 20));


console.log('============================');