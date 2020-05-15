// 1st

function palindrome(str) {
    const reversed = str.split('').str.reverse().str.join('');
    return str === reversed;
}

// 2nd

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}


module.exports = palindrome;