const fs = require('fs');

const findPaths = (data) => {
    const result = [];
    let lastPosition = 0;

    data.forEach((row, index) => {
        console.log('------lastPosition', lastPosition);
        const left = row[lastPosition] || -100;
        console.log('left', left);
        const right = row[lastPosition + 1] || -100;
        console.log('right', right);

        if (left > right) {
            result.push(left);
        } else {
            result.push(right);
            lastPosition += 1;
        }
    });


    return result;
}

console.log('============================');
try {
    const triangleStr = fs.readFileSync('./input2.txt', 'utf8');
    console.log(triangleStr);

    const triangleArr = triangleStr.split('\r\n');
    console.log('triangleArr', triangleArr);

    const data = triangleArr.map(t => {
        return t.trim().split(' ').map(d => Number(d.trim())).filter(d => d);
    });
    console.log('data', data);

    const paths = findPaths(data);
    console.log('paths', paths);

    console.log('SUM: ', paths.reduce((prev, curr) => {
        return prev + curr;
    }, 0));

    console.log(data.map(d => Math.max(...d)).reduce((prev, curr) => {
        return prev + curr;
    }, 0));
} catch (err) {
    console.error(err);
}

console.log('============================');