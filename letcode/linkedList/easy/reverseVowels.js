// https://leetcode.com/problems/reverse-vowels-of-a-string/

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"

// Example 2:

// Input: "leetcode"
// Output: "leotcede"

// Note:
// The vowels does not include the letter "y".

// We need 2 pointers and move them until they lend a val and swap them once they land it 

var reverseVowels = function(s) {
    let stringArr = s.plit('');
    let pointer1 = 0;
    let pointer2 = stringArr.length -1;

    while (pointer1 < pointer2) { // so they are never overlap
        while (pointer1 < pointer2 ) {
            if (!isVowel(stringArr[pointer1])) { // not a vowel
                pointer++; // keep moving
            } else {
                break;
            }
        }

        while (pointer1 < pointer2) {
            if (!isVowel(stringArr[pointer2])) {
                pointer2--;
            } else {
                break;
            }
        }

        let temp = stringArr[pointer1];
        stringArr[pointer1] = stringArr[pointer2];
        stringArr[pointer2] = temp;

        pointer1++;
        pointer2--;
    }

    return stringArr.join('');
};

var isVowel = function(char) {
    let vowels = 'aeiou';

    return vowels.includes(char.toLowerCase());
};
