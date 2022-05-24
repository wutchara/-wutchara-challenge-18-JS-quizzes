console.log('============================');

const extractStr = (all_str, ex_char) => {
    const all_str_clear = all_str.trim();
    const ex_char_clear = ex_char.trim();

    const first = all_str_clear.substring(0, all_str_clear.indexOf(ex_char_clear));
    const second = all_str_clear.replace(first, '');

    return second + first;
};

const text = 'ABCDEFG';
console.log('All string:', text);
console.log('Output:', extractStr(text, 'C'));

console.log('============================');