console.log('============================');

const checkPrime = (number) => {
    let isPrime = false;

    // more than 3 and the number is odd
    if (number > 3 && number % 2 === 1) {
        // logic to check prime number
        let isFinished = true;
        const max = Math.round(number / 3);
        for (let i = 3; i <= max; i += 2) {
            if (number % i === 0) {
                isFinished = false;
                break;
            }
        }
        if(isFinished) {
            isPrime = true;
        }
    } else if (number === 2 || number === 3) {
        isPrime = true;
    }

    return isPrime;
};

const getPrimeSet = (len) => {
    const result = [2, 3];
    let resultLen = result.length;
    if (len > 3) {
        // find the new one
        let candidate = result[resultLen - 1];
        do {
            // next candidate
            candidate += 2;

            // find next prime
            if (checkPrime(candidate)) {
                result.push(candidate);
                resultLen++;
            }
        } while(resultLen < len);
        console.log('result', result);
    } else if (len > 0) {
        return result.slice(0, len);
    } else {
        return [];
    }

    return result;
};

const getPrimePosition = (position) => {
    return getPrimeSet(position).pop();
};

console.log('the 6th prime is ', getPrimePosition(6));
console.log('the 10th prime is ', getPrimePosition(10));
console.log('the 10,001st prime is ', getPrimePosition(10001));

console.log('============================');