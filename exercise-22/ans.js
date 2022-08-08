console.log('============================');

const factorial = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
console.log('10! => ', factorial(10));

const sumDigits = (num) => {
    const numStr = String(num).split('').map(n => +n);
    return numStr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}
console.log('10! SUM => ', sumDigits(factorial(10)));


// This function multiplies x with the number
// represented by res[].
// res_size is size of res[] or number of digits in the
// number represented by res[]. This function uses simple
// school mathematics for multiplication.
// This function may value of res_size and returns the
// new value of res_size
const multiply = (x, res, res_size) => {
    let carry = 0; // Initialize carry

    // One by one multiply n with individual digits of res[]
    for (let i = 0; i < res_size; i++) {
        let prod = res[i] * x + carry;

        // Store last digit of 'prod' in res[]
        res[i] = prod % 10;

        // Put rest in carry
        carry = Math.floor(prod / 10);
    }

    // Put carry in res and increase result size
    while (carry) {
        res[res_size] = carry % 10;
        carry = Math.floor(carry / 10);
        res_size++;
    }
    return res_size;
}

const factorial2 = (n) => {
    // find factorial
    // n! = n * (n-1)!
    // n! = n * (n-1) * (n-2) * ... * 1
    let res = new Array();

    // Initialize result
    res[0] = 1;
    let res_size = 1;

    // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
    for (let x = 2; x <= n; x++)
        res_size = multiply(x, res, res_size);
    
    return res.reverse().join('');
}

const sumDigits2 = (num) => {
    const numFact = factorial2(num).split('').map(n => +n);
    return numFact.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}
console.log('100! SUM => ', sumDigits2(100));

console.log('============================');