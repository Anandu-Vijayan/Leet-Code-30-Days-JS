// 508. Most Frequent Subtree Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

// The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

 

// Example 1:


// Input: root = [5,2,-3]
// Output: [2,-3,4]
// Example 2:


// Input: root = [5,2,-5]
// Output: [2]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const freq = new Map();
    let max = 0;

    function sum(node) {
        if (!node) return 0;
        const left = sum(node.left);
        const right = sum(node.right);
        const total = node.val + left + right;
        freq.set(total, (freq.get(total) || 0) + 1);
        max = Math.max(max, freq.get(total));
        return total;
    }

    sum(root);
    const res = [];
    for (const [k, v] of freq) {
        if (v === max) res.push(k);
    }
    return res;
};