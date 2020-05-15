// 1st

function reverse(str) {
    return str.split('').reverse().join('');
}

// 2nd

function reverse(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

//3rd

function reverse(str) {
    return str.split('').str.reduce((reversed, char) => {
        return char + reversed
    }, '');
}

module.exports = reverse
