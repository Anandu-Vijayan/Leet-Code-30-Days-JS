// 368. Largest Divisible Subset
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.


var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const dp = Array(n).fill(1);
    const parent = Array(n).fill(-1);

    let maxLen = 1, maxIdx = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxIdx = i;
        }
    }

    const result = [];
    while (maxIdx !== -1) {
        result.push(nums[maxIdx]);
        maxIdx = parent[maxIdx];
    }

    return result;
};