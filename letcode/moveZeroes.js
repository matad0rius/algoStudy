// https://leetcode.com/problems/move-zeroes/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.


// We need to use 3 pointers at once

var moveZeroes = function(nums) {
    let anchor = 0;
    
    for (let explore = 0; explore < nums.length; epxlore++) {
        if (nums[explore] !== 0) {
            let temp = nums[anchor]; 
            nums[anchor] = nums[explore];
            nums[explore] = nums[anchor]; // is is saved to temp

            anchor++; // since it is not 0 we move forward
        }
    }
};
