// 525. Contiguous Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Example 3:

// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.


/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const hash = {};
  let max_length = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === 0) {
        // if the current element is 0, then we decrement the count
      count--;
    } else if (current === 1) {
        // if the current element is 1, then we increment the count
      count++;
    }

    if (count === 0) {
        // if the count is equal to o then we have a contiguous subarray of length equal to i+1
      max_length = i + 1;
    }
    if (count in hash) {
    
      max_length = Math.max(max_length, i - hash[count]); // update our max length
    } else {
      hash[count] = i;
    }

  }
  return max_length;
};