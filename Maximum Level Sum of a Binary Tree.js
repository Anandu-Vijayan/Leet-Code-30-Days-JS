// 1161. Maximum Level Sum of a Binary Tree
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

// Example 1:


// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105


var maxLevelSum = function(root) {
    var values = sumRoot(root, 1, [])
    let maxValue = -Infinity
    let maxLevel = -1
    for (var i = 0; i < values.length; i++) {
        if (values[i] > maxValue) {
            maxValue = values[i]
            maxLevel = i
        }
    }
    return maxLevel
}

function sumRoot(root, level, valuesOfLevel) {
    let value = valuesOfLevel[level] || 0
    valuesOfLevel[level] = value + root.val

    if (root.left) {
        sumRoot(root.left, level + 1, valuesOfLevel)
    }
    if (root.right) {
        sumRoot(root.right, level + 1, valuesOfLevel)
    }
    return valuesOfLevel
}
