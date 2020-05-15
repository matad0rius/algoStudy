// Write a function that accepts a string. The function should capitalize
// the 1st letter of each word in the string then return the capitalized string

//1st

function capitalize(str) {
    const words = [];

    for (let word of str.split('')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return word.join('');
}

//2nd

function capitalize(str) {
    let results = str[0].toUpperCase;

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === '') {
            results += str[i].toUpperCase;
        }   else {
            results += str[i];
        }
    }

    return results;
}

module.exports = capitalize;
