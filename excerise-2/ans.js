console.log('============================');
const all_vocalists = ['Beyonce (f)', 'David Bowie (m)', 'Elvis Costello (m)', 'Madonna (f)', 'Elton John (m)', 'Charles Aznavour (m)'];
console.log('All Vocalists', all_vocalists);

const countSex = (names) => {
    const count = {
        male: 0,
        female: 0,
        unknown: 0,
    };

    names.forEach(name => {
        const name_lower = name.trim().toLocaleLowerCase();
        if (name_lower.endsWith('(m)')) {
            count.male++;
        } else if (name_lower.endsWith('(f)')) {
            count.female++;
        } else {
            count.unknown++;
        }
    });

    return count;
};

console.log('Answer', countSex(all_vocalists));


console.log('============================');