// 230. Kth Smallest Element in a BST
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
 

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
 

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

var kthSmallest = function (root, k) {
    let ans
    let count = 0
    function inOrder(root) {
        if (!root) return   ///if root is null nothing to do
        inOrder(root.left)
        count++
        if (count === k) {      //when count===k store the value to ans
            return ans = root.val
        }
        inOrder(root.right)
    }
    inOrder(root)
    return ans
};