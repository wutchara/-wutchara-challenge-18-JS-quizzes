console.log('============================');

// bad performance
const scores_1 = (min, max) => {
    const scores = {};
    for (let i = min; i <= max; i++) {
        scores[i + ''] = {
            single: i,
            double: i * 2,
            treble: i * 3,
        };
    }

    return scores;
};
console.log('scores_1', scores_1(1, 20));

// use mathematic
const scores_2 = (min, max) => {
    // single => [1, 2, 3, ..., 20]
    // double => [2, 4, 6, 8, ..., 40]
    // treble => [3, 6, 9, 12, 15, ..., 60]
    let double = min * 2;
    let treble = min * 3;

    const scores = {};
    for (let i = min; i <= max; i++) {
        scores[i + ''] = {
            single: i,
            double: double,
            treble: treble,
        };

        double += 2;
        treble += 3;
    }

    return scores;
};
console.log('scores_2', scores_2(1, 20));
console.log('============================');