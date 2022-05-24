console.log('============================');

const words = ['cello', 'guitar', 'violin', 'double bass'];
console.log('words', words);

const removeVowels = (words) => {
    return words.map(word => word.replace(/a|e|i|o|u|A|E|I|O|U/g, ''));
};

console.log('Answer', removeVowels(words));
console.log('============================');