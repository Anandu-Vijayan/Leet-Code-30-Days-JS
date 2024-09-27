// 108. Convert Sorted Array to Binary Search Tree
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.


var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;

    const midIndex = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[midIndex]);

    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));

    return root;
};