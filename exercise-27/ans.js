console.log('============================');

// format: 1/d; 1 > d > 1000
const unitFraction = (d) => {
    let lastRemainder = 1;
    // 0.1666... => sets: [6] and res: 1
    const resultObj = {
        sets: [],
        res: '',// string
    };
    const denominator = d;
    let counter = 1;

    // 0.xxxxx
    do {
        const numerator = lastRemainder * 10;

        const result = Math.floor(numerator/denominator);
        const newRemainder = numerator % denominator;
        console.log('resultObj', resultObj);
        console.log('result', result);
        console.log('newRemainder', newRemainder);
        resultObj.res += result;

        // eq 0
        if (newRemainder === 0) {
            resultObj.sets = [];
            break;
        }

        resultObj.sets.push(result);
        if (newRemainder === lastRemainder) {// TODO: find the new patten
            // clean up
            // remove the last number
            const tempRes = resultObj.res.slice(0, resultObj.res.length - 1);
            resultObj.res = tempRes;

            const tempSets = [...resultObj.sets].reverse();
            for (let i = 0; i < tempRes.length; i++) {
                tempSets.pop();
            }
            resultObj.sets = tempSets.reverse();

            break;
        } else {
            lastRemainder = newRemainder;
        }

        if (counter++ > 20) {
            console.error('xxxxxxxxxxxxxxxxxxxxxxxxx');
            break;
        }
    } while(lastRemainder !== 0);

    console.log('resultObj', resultObj);
    const duplicateNumber = resultObj.sets.join('');
    let resultStr = '0.' + resultObj.res.replace(duplicateNumber, '');

    if (resultObj.sets.length) {
        resultStr += '(' + duplicateNumber + ')';
    }

    return resultStr;
}


console.log('xxxx: 2 ======== >', unitFraction(2));
console.log('xxxx: 3 ======== >', unitFraction(3));
console.log('xxxx: 4 ======== >', unitFraction(4));
console.log('xxxx: 5 ======== >', unitFraction(5));
console.log('xxxx: 6 ======== >', unitFraction(6));
console.log('xxxx: 7 ======== >', unitFraction(7));// TODO: find the new patten
console.log('============================');