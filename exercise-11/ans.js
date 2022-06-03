console.log('============================');
// Pythagorean triplet is a set of three natural numbers, a < b < c,
// a^2 + b^2 = c^2
const validateVariable = (a, b, c) => {
    if ((a && b && c) && (a < b && b < c)) {
        return true
    }

    return false;
}

const validateResult = (result, x) => {
    return (result.a + result.b + result.c) === x;
}

const validateResultRange = (result, x) => {
    // return result.a + result.b + result.c <= x;
    return result.a < x && result.b < x && result.c < x;
}

const sumResult = (result) => {
    return result.a + result.b + result.c;
}

// a + b + c = x
const findVariables = (x) => {
    // minimum answer
    let result = {
        a: 3,
        b: 4,
        c: 5,
    }

    if (x < result.a + result.b + result.c) {
        return {
            a: 0,
            b: 0,
            c: 0,
        }
    } else {
        const diff = {
            value: 0,
            diff: x,
        }
        // finding logic
        // a^2 + b^2 = c^2
        while (!validateResult(result, x)) {
            if (!validateResultRange(result, x)) {
                result = null;
                break;
            }

            do {
                result.b += 1;
                const tempC = Math.sqrt(Math.pow(result.a, 2) + Math.pow(result.b, 2));
                // console.log('tempC', tempC, Number.isInteger(tempC));

                // find c
                if (Number.isInteger(tempC)) {
                    result.c = tempC;
                    // console.log('result', result);

                    // check diff
                    const sum = sumResult(result);
                    const tempDiff = Math.abs(sum - x);
                    if (tempDiff < diff.diff) {
                        diff.value = sum;
                        diff.diff = tempDiff;
                        diff.result = {
                            ...result,
                        };
                    }

                    break;
                }
            } while (result.b < x);

            if (validateResult(result, x)) {
                break;
            }

            result.a += 1;
            result.b = result.a + 1;
        }

        !result && console.log('diff', diff);
    }

    return result;
}

const x1 = 12;
console.log('a + b + c = ' + x1, '====>>', findVariables(x1));

const x2 = 1000;
console.log('a + b + c = ' + x2, '====>>', findVariables(x2));

const x3 = 1017;
console.log('a + b + c = ' + x3, '====>>', findVariables(x3));

const x4 = 996;
console.log('a + b + c = ' + x4, '====>>', findVariables(x4));

console.log('============================');