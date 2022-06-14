console.log('============================');

const findTriangularNumber = (position) => {
    return ((position) * (position + 1)) / 2;
}

const findDivisors = (number) => {
    const max = Math.ceil(number / 2);
    const result = [1];

    if (number < 1) {
        return [];
    } else {
        let divisor = 2;

        while (divisor <= max) {
            if (number % divisor === 0) {
                result.push(divisor);
            }

            divisor += 1;
        }
        result[result.length - 1] !== number && result.push(number);

        return result;
    }
}

// const findTriangleNumberSequence = (number) => {
//     const result = [];
//     let remain = number;

//     do {
//         result.push(findTriangularNumber(remain--));
//     } while (remain > 0);

//     return result.reverse();
// }

const findDivisorsTriangle = (divisorNumber) => {
    let position = 1;
    let result = [];
    let lastTriangle = 1;

    do {
        console.log(position, lastTriangle, 'LENGTH:', result.length);
        lastTriangle = findTriangularNumber(position++);
        result = findDivisors(lastTriangle);
    } while (result.length <= divisorNumber);

    return {
        triangleNumber: lastTriangle,
        divisors: result,
        divisorLength: result.length,
    }
}

// console.log('findDivisorsTriangle(5)', findDivisorsTriangle(5));
// console.log('findDivisorsTriangle(10)', findDivisorsTriangle(10));
// console.log('findDivisorsTriangle(100)', findDivisorsTriangle(100));
console.log('findDivisorsTriangle(500)', findDivisorsTriangle(500)); // 76576500

console.log('============================');