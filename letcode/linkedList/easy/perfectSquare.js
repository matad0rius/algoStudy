// https://leetcode.com/problems/valid-perfect-square/

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true

// Example 2:

// Input: num = 14
// Output: false

// divide and conquer

var isPerfectSquare = function(num) {
    if (num < 1) {
        return false;
    }

    if (num === 1) {
        return true;
    }

    let left = 1;
    let right = num;

    while (left <= right) {
        let mid = left + Math.floor((right - left) /2 );

        if (mid * mid === num) {
            return true;
        } else if (mid * mid > num) {
            right = mid - 1;
        } else if (mid * mid < num) {
            left = mid + 1;
        }
    }

    return false; // if our numbers are not a perfect square
};
