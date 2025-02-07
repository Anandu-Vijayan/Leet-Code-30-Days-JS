// 164. Maximum Gap
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

 

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let length = nums.length
    
    //Base Case
    if(length < 2) {
        return 0
    } else if(length === 2) {
        return Math.abs(nums[0] - nums[1])
    }

    let maxGap = 0;    
    let min = Math.min(...nums)
    let max = Math.max(...nums)    
    

    let bucketSize = Math.ceil((max - min)/(length - 1))

    let minBuckets = Array(length - 1).fill(Number.MAX_SAFE_INTEGER)
    let maxBuckets = Array(length - 1).fill(Number.MIN_SAFE_INTEGER)

    for(let i = 0; i < length; i++) {
        if(nums[i] === min || nums[i] === max) {
            continue;
        }

        let bucketIndex = Math.floor((nums[i] - min)/bucketSize)

        minBuckets[bucketIndex] = Math.min(minBuckets[bucketIndex], nums[i]);

        maxBuckets[bucketIndex] = Math.max(maxBuckets[bucketIndex], nums[i]);
    }

    let prevMax = min;

    for(let i = 0; i < length - 1; i++) {
        if(minBuckets[i] === Number.MAX_SAFE_INTEGER) {
            continue;
        }

        maxGap = Math.max(minBuckets[i] - prevMax, maxGap);
        prevMax = maxBuckets[i]
    }

    maxGap = Math.max(maxGap, max- prevMax)

    return maxGap
};