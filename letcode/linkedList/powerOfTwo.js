// https://leetcode.com/problems/power-of-two/

// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true 
// Explanation: 20 = 1

// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16

// Example 3:

// Input: 218
// Output: false

var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false;
    }

    let powerOfTow = 1;

    while (powerOfTow < n) {
        powerOfTow *= 2;
    }

    return powerOfTow === n;
};
