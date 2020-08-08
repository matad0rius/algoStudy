// https://leetcode.com/problems/first-unique-character-in-a-string/

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


var firstUniqChar = function(s) {
    let frequencies = {};
    let result = -1;

    for (let char of s) {
        if (frequencies[char] === undefined) {
            frequencies[char] = 1;
        } else {
            frequencies[char]++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);

        if (frequencies[char] === 1) {
            return i;
        }
    }

    return result;
};
