// 152. Maximum Product Subarray
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // Check if the input array is empty, return 0 if it
    // is
    if (nums.length === 0) {
        return 0;
    }

    // Initialize maxSoFar and minSoFar with the first
    // element in the array, and result with maxSoFar
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;

    // Loop through the rest of the elements in the array
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];

        // Update maxSoFar and minSoFar with the maximum and
        // minimum of curr, maxSoFar * curr, and minSoFar *
        // curr tempMaxSoFar is used to store the value of
        // maxSoFar so that it does not get updated while
        // calculating minSoFar
        const tempMaxSoFar = Math.max(
            curr,
            maxSoFar * curr,
            minSoFar * curr
        );

        minSoFar = Math.min(
            curr,
            maxSoFar * curr,
            minSoFar * curr
        );

        maxSoFar = tempMaxSoFar;

        // Update result with the maximum of maxSoFar and
        // result
        result = Math.max(maxSoFar, result);
    }

    // Return the final result
    return result;
};