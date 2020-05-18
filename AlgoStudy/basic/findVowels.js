// 1st

function vowels(str) {
    let count = 0;
    const checker = "aeiou";

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++
        }
    }

    return count;
}

// 2nd

function vowels(str) {
    const matches = str.match(/[aeiou]/gi); // match founf return arr not found return null
    return matches ? matches.length : 0;
}


module.exports = vowels;
