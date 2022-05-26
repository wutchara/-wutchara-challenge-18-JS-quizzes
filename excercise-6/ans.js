console.log('============================');
const reverseString = (str) => {
    return str.split("").reverse().join("");
}

const findPalindromicNumber = (digit) => {
    let result = 9;
    if (digit > 1) {
        // TODO: assume digit is 2
        // [10, 11, 12, ..., 99]
        // [10^(2-1), ..., 10^(2) - 1]
        // bad performance
        const start = Math.pow(10, digit - 1);
        const end = Math.pow(10, digit) - 1;

        // reverse loop
        for (let i = end; i > start; i--) {
            const str = i.toString();
            if (str === reverseString(str)) {
                result = parseInt(str);
                break;
            }
        }
    }

    return result;
}

const digit2 = 2;
console.log(`Largest  palindrome(${digit2})`, findPalindromicNumber(digit2));

const digit3 = 3;
console.log(`Largest  palindrome(${digit3})`, findPalindromicNumber(digit3));

console.log('============================');

const findPalindromicNumber2 = (digit) => {
    let result = -1;
    // TODO: assume digit is 2
    // [10, 11, 12, ..., 99]
    // [10^(2-1), ..., 10^(2) - 1]
    // bad performance
    const start = Math.pow(10, digit - 1);
    const end = Math.pow(10, digit) - 1;
    let num1 = null;
    let num2 = null;

    // reverse loop
    for (let i = end; i > start; i--) {
        for (let j = i - 1; j > start; j--) {
            const str = (i * j).toString();
            num1 = i;
            num2 = j;
            if (str === reverseString(str)) {
                result = parseInt(str);
                break;
            }
        }

        if (result !== -1) {
            break;
        }
    }


    return {
        result,
        multiplier: [num1, num2],
    };
};


console.log(`Largest  palindrome(${digit2})`, findPalindromicNumber2(digit2));
console.log(`Largest  palindrome(${digit3})`, findPalindromicNumber2(digit3));

console.log('============================');