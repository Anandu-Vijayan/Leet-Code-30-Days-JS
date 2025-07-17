// 416. Partition Equal Subset Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100


var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2) return false;
    const target = sum / 2;
    let dp = 1n;
    for (let num of nums) {
        dp |= dp << BigInt(num);
    }
    return (dp >> BigInt(target)) & 1n ? true : false;
};