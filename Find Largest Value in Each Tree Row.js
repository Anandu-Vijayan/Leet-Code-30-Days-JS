// 515. Find Largest Value in Each Tree Row
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

 

// Example 1:


// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
// Example 2:

// Input: root = [1,2,3]
// Output: [1,3]
 

// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -231 <= Node.val <= 231 - 1


var largestValues = function(root) {
    const res = [];

    if (!root) {
      return res;
    }

    const q = [];
    q.push(root);

    while (q.length > 0) {
        let max_val = Number.NEGATIVE_INFINITY;
        const levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            const node = q.shift();
            max_val = Math.max(max_val, node.val);

            if (node.left) {
                q.push(node.left);
            }

            if (node.right) {
                q.push(node.right);
            }
        }

        res.push(max_val);
    }

    return res;    
};