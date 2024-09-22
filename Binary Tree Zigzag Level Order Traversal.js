// 103. Binary Tree Zigzag Level Order Traversal
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let symbol = Symbol('break');
    const queue = [root, symbol];
    const traversal = [];
    let flip = false;
    const result = [];
    let temp = new Array();

    while (queue.length) {

        const item = queue[0];
        queue.shift();

        if (!item) continue;

        if (typeof item == 'symbol') {

            traversal.push(symbol);
            if (queue.length == 0) {
                break;
            }
            queue.push(symbol);
            continue;
        }

        traversal.push(item);

        if (item.left) queue.push(item.left);
        if (item.right) queue.push(item.right);


    }


    for (let item of traversal) {
        if (item == symbol) {
            if (flip)
                result.push(temp.reverse());
            else
                result.push(temp);
            temp = new Array();
            flip = !flip;
        } else {
            temp.push(item.val);
        }
    }
    return result;
};