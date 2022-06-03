console.log('============================');

const checkPrime = (number) => {
    if (number <= 3) {
        return (number === 3 || number === 2);
    } else if (number % 2 != 0) {
        let isPrime = true;
        const max = number / 3;
        if (Number.isInteger(max)) {
            return false;
        }

        for (let divided = 3; divided < max; divided += 2) {
            if (number % divided === 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    return false;
};

const getPrimeLists = (max) => {
    const result = [];
    if (max >= 2) {
        if (max > 2) {
            result.push(2);
        }

        for (let num = 3; num <= max; num += 2) {
            checkPrime(num) && result.push(num);
        }
    }

    return result;
}

const sumPrimes = (max) => {
    const initialValue = 0;
    return getPrimeLists(max).reduce((pre, current) => {
        return pre + current
    }, initialValue);
}

console.log('10', getPrimeLists(10), sumPrimes(10));
console.log('13', getPrimeLists(13), sumPrimes(13));
console.log('100', getPrimeLists(100), sumPrimes(100));


console.log('============================');