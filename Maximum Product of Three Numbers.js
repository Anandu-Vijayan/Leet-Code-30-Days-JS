// 628. Maximum Product of Three Numbers
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6
 

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

var maximumProduct = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (const num of nums) {
        if (num > max1) {
            [max3, max2, max1] = [max2, max1, num];
        } else if (num > max2) {
            [max3, max2] = [max2, num];
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min1) {
            [min2, min1] = [min1, num];
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};