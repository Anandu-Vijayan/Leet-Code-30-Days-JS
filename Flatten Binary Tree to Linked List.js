// 114. Flatten Binary Tree to Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

// Example 1:


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
 

// Follow up: Can you flatten the tree in-place (with O(1) extra space)?


var flatten = function(root) {
    let head = null, curr = root
    while (head != root) {
        if (curr.right === head) curr.right = null
        if (curr.left === head) curr.left = null
        if (curr.right) curr = curr.right
        else if (curr.left) curr = curr.left
        else curr.right = head, head = curr, curr = root
    }
};