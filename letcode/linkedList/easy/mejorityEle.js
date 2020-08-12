// https://leetcode.com/problems/majority-element/

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let half = nums.length / 2; // if ele appears more than half we know it is a majority ele

    let eleCount = new Map();

    for (let num of nums) {
        if (!eleCount.has(nums)) {
            eleCount.set(num, 1);
        } else {
          eleCount.set(num, eleCount.get(num) + 1); // Add +1 to the ele if it was already set
        }

        if (eleCount.get(num) > half) {
            return num;
        }
    }

    return -1;
};
