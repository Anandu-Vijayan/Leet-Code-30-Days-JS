// 493. Reverse Pairs
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where:

// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
 

// Example 1:

// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:

// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -231 <= nums[i] <= 231 - 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let numReversePairs = 0; 
  helper(nums);
  return numReversePairs;
  
  function helper(nums) {
    if (nums.length <= 1) return nums;   
    const length = nums.length;
    const left = helper(nums.slice(0, Math.floor(length/2)));
    const right = helper(nums.slice(Math.floor(length/2)));    
    return merge(left, right);    
  }
  
  function merge(left, right) {
    const nums_sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;  
    while(leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] > 2 * right[rightIndex]) {
        numReversePairs += (left.length - leftIndex);
        rightIndex++;
      } else {
        leftIndex++;
      }
    }    
    leftIndex = 0;
    rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        nums_sorted.push(left[leftIndex]);
        leftIndex++;
      } else {
        let cur = leftIndex;
        nums_sorted.push(right[rightIndex]);
        rightIndex++;
      }
    }
    while (leftIndex < left.length) {
      nums_sorted.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      nums_sorted.push(right[rightIndex]);
      rightIndex++;
    }
    return nums_sorted;
  }
  
};