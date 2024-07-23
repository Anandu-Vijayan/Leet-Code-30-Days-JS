// 41. First Missing Positive
// Solved
// Hard
// Topics
// Companies
// Hint
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const numsLength = nums.length;
    // initialize the cursor
    let i = 0;

    // phase 1: sort the numbers with cyclic sort
    // move the cursor through the list
    while (i < numsLength) {
        // has minus 1 because the numbers start from 1 not 0
        const valAtI = nums[i] - 1;

        // does the value belong in the range of the list?
        // if it doesn't, we get an out of bounds error
        // when we try to access nums[valAtI] later
        const belongsInRange =
            valAtI >= 0 && valAtI < numsLength;

        // is the value at the wrong index?
        const isAtWrongIndex = nums[i] !== nums[valAtI];

        if (belongsInRange && isAtWrongIndex) {
            [nums[i], nums[valAtI]] = [nums[valAtI], nums[i]];
        } else {
            i++;
        }
    }

    // phase 2: find the first missing positive integer
    for (let x = 0; x < numsLength; x++) {
        // has plus 1 because the numbers start from 1 not 0
        if (x + 1 !== nums[x]) {
            return x + 1;
        }
    }

    // if all numbers are in the correct spot,
    // the first missing positive integer is the
    // length of the list + 1
    return numsLength + 1;
};