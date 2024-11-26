// 450. Delete Node in a BST
// Solved
// Medium
// Topics
// Companies
// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -105 <= Node.val <= 105
// Each node has a unique value.
// root is a valid binary search tree.
// -105 <= key <= 105
 

// Follow up: Could you solve it with time complexity O(height of tree)?


const mergeNodes = (node1, node2) => {
    if (!node1 || !node2) {
        return;
    }

    let currNode = node2;
    while (currNode.left !== null) {
        currNode = currNode.left;
    }
    currNode.left = node1;
}

var deleteNode = function (root, key) {
    if (!root) {
        return root;
    } else if(root.val === key){
        const leftNode = root.left;
        const rightNode = root.right;
        root = null;
        mergeNodes(leftNode, rightNode);

        return rightNode || leftNode;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node.left?.val === key) {
            const leftNode = node.left.left;
            const rightNode = node.left.right;
            node.left = null;
            
            mergeNodes(leftNode, rightNode);
            node.left = rightNode || leftNode;
            break;
        }

        if (node.right?.val === key) {
            const leftNode = node.right.left;
            const rightNode = node.right.right;
            node.right = null;

            mergeNodes(leftNode, rightNode)
            node.right = rightNode || leftNode;
            break;
        }

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return root;
};