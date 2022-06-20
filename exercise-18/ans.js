console.log('============================');

// const bigInt = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(bigInt);
// console.log(BigInt(2 ** 128));
// console.log(BigInt(2 ** 1000));
// console.log(Math.pow(2, 1000));

const strResult = BigInt(2 ** 1000).toString();
console.log('strResult', strResult);

const resultArr = strResult.split('');
console.log('Size:', resultArr.length);
console.log('Items:', resultArr);
console.log('the sum of the digits: ', resultArr.reduce((p, c) => {
    return +p + +c;
}, 0));
console.log('============================');