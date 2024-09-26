// 107. Binary Tree Level Order Traversal II
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000


const levelOrderBottom = (root) => {
    if (!root) return [];
    const levels = [];
    const queue = [root];
    
    while (queue.length) {
        const level = [];
        const queueLength = queue.length;
        
		// Following the conventional BFS template
        for (let i = 0; i < queueLength; i++) {
            const currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            level.push(currentNode.val)
        }
        levels.push(level);
    }
    
  // This .reverse() function is how we get the bottom-up order
    return levels.reverse();
};