// 95. Unique Binary Search Trees II
// Solved
// Medium
// Topics
// Companies
// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

 

// Example 1:


// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 8

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    return generate(1, n);
  }
  
  function generate(start, end) {
    
    let result = [];
    
    if (start > end) {
  
      result.push(null);
  
      return result;
    }
  
    for (let i = start; i <= end; i++) {
      
      let leftSubtrees = generate(start, i - 1);
      
      let rightSubtrees = generate(i + 1, end);
  
      for (let leftSubtree of leftSubtrees) {
  
        for (let rightSubtree of rightSubtrees) {
  
          let root = new TreeNode(i);
  
          root.left = leftSubtree;
  
          root.right = rightSubtree;
  
          result.push(root);
        }
      }
    }
    return result;    
  };