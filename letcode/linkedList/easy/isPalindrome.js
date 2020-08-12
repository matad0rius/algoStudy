// https://leetcode.com/problems/valid-palindrome/

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

 

// Constraints:

//     s consists only of printable ASCII characters.

var isPalindrome = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        while (!isValidChar(s.charAt(leftPointer))) {
            leftPointer++;
        }

        while (!isValidChar(s.charAt(rightPointer))) {
            rightPointer--;
        }

        if (s.charAt(leftPointer).toLowerCase() !== s.charAt(rightPointer).toLowerCase()) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }
};

let isValidChar = function(char) {
    let validChars = 'abcedfghijklmnopqrstuvwxyz0123456789';

    return validChars.indexOf(char.toLowerCase()) > -1;
};
