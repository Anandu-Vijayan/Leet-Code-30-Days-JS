// 90. Subsets II
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums, res = [], path = [], index = 0, visited = new Set()) => {
    const copy = [...path]
    const pattern = copy.sort().join()
    
    if (visited.has(pattern))
      return res
    
    res.push(copy)
    visited.add(pattern)
  
    if (index >= nums.length)
      return res
  
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i])
      subsetsWithDup(nums, res, path, i + 1, visited)
      path.pop()
    }
  
    return res
  }