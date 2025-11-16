// 581. Shortest Unsorted Continuous Subarray
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

// Return the shortest such subarray and output its length.

 

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
 

// Follow up: Can you solve it in O(n) time complexity?



var findUnsortedSubarray = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    let start = nums.length, end = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i]) {
            start = Math.min(start, i);
            end = Math.max(end, i);
        }
    }

    return end - start >= 0 ? end - start + 1 : 0;
};