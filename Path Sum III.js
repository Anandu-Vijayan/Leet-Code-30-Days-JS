// 437. Path Sum III
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

// Example 1:


// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
 

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000


var pathSum = function (root, targetSum) {
    if (!root) return 0;
    const runningSumsMap = new Map();
    runningSumsMap.set(0, 1);

    function pathSumFromRoot(currentNode, currentRunningValSum) {
        let currentNodePathSum = 0;
        currentRunningValSum += currentNode.val;
        let missingPrevRunningValSum = currentRunningValSum - targetSum;

        if (runningSumsMap.has(missingPrevRunningValSum)) currentNodePathSum += runningSumsMap.get(missingPrevRunningValSum);

        if (!runningSumsMap.has(currentRunningValSum)) runningSumsMap.set(currentRunningValSum, 1);
        else runningSumsMap.set(currentRunningValSum, runningSumsMap.get(currentRunningValSum) + 1);

        let childrenNodesPathSum = 0;
        if (currentNode.left) childrenNodesPathSum += pathSumFromRoot(currentNode.left, currentRunningValSum);
        if (currentNode.right) childrenNodesPathSum += pathSumFromRoot(currentNode.right, currentRunningValSum);
        
        runningSumsMap.set(currentRunningValSum, runningSumsMap.get(currentRunningValSum) - 1);

        return currentNodePathSum + childrenNodesPathSum;
    }
    return pathSumFromRoot(root, 0);
};