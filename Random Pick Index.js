// 398. Random Pick Index
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the array nums.
// int pick(int target) Picks a random index i from nums where nums[i] == target. If there are multiple valid i's, then each index should have an equal probability of returning.
 

// Example 1:

// Input
// ["Solution", "pick", "pick", "pick"]
// [[[1, 2, 3, 3, 3]], [3], [1], [3]]
// Output
// [null, 4, 0, 2]

// Explanation
// Solution solution = new Solution([1, 2, 3, 3, 3]);
// solution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
// solution.pick(1); // It should return 0. Since in the array only nums[0] is equal to 1.
// solution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// target is an integer from nums.
// At most 104 calls will be made to pick.


/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.indexMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(!this.indexMap.has(num)) this.indexMap.set(num, []);
        this.indexMap.get(num).push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexes = this.indexMap.get(target);
    const length = indexes.length;
    const rand = Math.floor(Math.random() * length);

    return indexes[rand];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */