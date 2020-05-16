// Check to see if 2 provided strings are anagram of eachoter
// 1 string is an anagram of other is it uses the same char in the same quantity
// Only consider char not spaces or punctuation. Consider capital letters to be 
// the same lower case 

// 1st

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

// 2nd

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
