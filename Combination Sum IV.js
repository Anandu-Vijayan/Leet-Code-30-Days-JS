// 377. Combination Sum IV
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// All the elements of nums are unique.
// 1 <= target <= 1000
 

// Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?/**

function combinationSum4(nums, target) {
  // dp[i] means the number of combinations to get sum i.
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // One way to make target 0 (choose nothing)

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      // If i - num >= 0, we can use num to build up to i.
      if (i - num >= 0) {
        dp[i] += dp[i - num]; // not use num + use num
      }
    }
  }

  return dp[target];
}