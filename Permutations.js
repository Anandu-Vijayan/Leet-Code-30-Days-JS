// 46. Permutations
// Solved
// Medium
// Topics
// Companies
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    permuteRec(nums, 0, result);

    return result;
};

// This function will swap characters for every
// permutation
function swapNums(nums, i, j) {
let swapIndex = [...nums];

  let temp = swapIndex[j];
  swapIndex[j] = swapIndex[i];
  
  swapIndex[i] = temp;

  return swapIndex
}

function permuteRec(nums, currentIndex, result) {
    var swappedNums;

    if (currentIndex === nums.length - 1) {
        result.push(nums);
        return;
    }

    for (var index = currentIndex; index < nums.length; index++) {
        swappedNums = swapNums(nums, currentIndex, index);
        permuteRec(swappedNums, currentIndex + 1, result);
    }
}