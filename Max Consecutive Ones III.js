// 1004. Max Consecutive Ones III
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length


var longestOnes = function(nums, k) {
    let left = 0;
  let right = 0;
  let maxOnesCount = 0;
  let maxLength = 0;

  while (right < nums.length) {
      if (nums[right] === 1) {
          maxOnesCount++;
      }

      if ((right - left + 1) - maxOnesCount > k) {
          if (nums[left] === 1) {
              maxOnesCount--;
          }
          left++;
      }

      maxLength = Math.max(maxLength, right - left + 1);
      right++;
  }

  return maxLength;
  
};