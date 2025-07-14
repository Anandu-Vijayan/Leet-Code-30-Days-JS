// 413. Arithmetic Slices
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */

/*formula f(n) = ((n - 2) * (n - 1)) / 2; */ 

var numberOfArithmeticSlices = function(nums) {
    let n = nums.length;
    if (n < 3) return 0;

    let ans = 0;
    let count = 2; 
    let diff = nums[1] - nums[0];
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] === diff) {
            count++;
        } else {
            if (count >= 3) {
                ans += ((count - 2) * (count - 1)) / 2;
            }
            count = 2;
            diff = nums[i] - nums[i - 1];
        }
    }
    if (count >= 3) {
        ans += ((count - 2) * (count - 1)) / 2;
    }

    return ans;
};