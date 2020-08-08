// https://leetcode.com/problems/count-primes/Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var countPrimes = function(n) {
    let nums = [];
    let primeCount = 0;

    for (let i = 0; i < n; i++) {
        nums[i] = true;
    }

    for (let i = 2; i * i < n, i++) {
        if (nums[i] === true) {
            for (let j = 2; j * i < n; j++) {
                nums[j * i] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (nums[i] === true) {
            primeCount++;
        }
    } 

    return primeCount;
};
