// 110. Balanced Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given a binary tree, determine if it is 
// height-balanced
// .

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let result = true;

    if (root === null) {
        return true;
    }

    function dfs(node) {
        let left = 0;
        let right = 0;

        if (result === false) {
            // we already got the answer.
            return;
        }

        if (node.left === null && node.right === null) {
            return 0;
        }

        if (node.left) {
            left += dfs(node.left) + 1;
        }

        if (node.right) {
            right += dfs(node.right) + 1;
        }

        if (Math.abs(left - right) > 1) {
            result = false;
            return;
        }

        return Math.max(left, right);
    }

    dfs(root);

    return result;
}


 var isBalanced2 = function(root) {
     if (root === null) {
         return true;
     }

     var isBalanced = true;

     function dfs(root) {
        var leftDepth = 0;
        var rightDepth = 0;

        if (isBalanced === false) {
            // if the tree is not balanced don't do anything.
            return;
        }

        if (root.left) {
            leftDepth = dfs(root.left) + 1;
        }

        if (root.right) {
            rightDepth = dfs(root.right) + 1;
        }

        isBalanced = Math.abs(leftDepth - rightDepth) > 1 ? false : isBalanced;
        return Math.max(leftDepth, rightDepth);
     }

     dfs(root);

     return isBalanced;
 }


//  var isBalanced = function(root) {
//      if (root === null) {
//          //base condition;
//          return;
//      }

//      function dfs(root) {
//         var left = 0;
//         var right = 0;

//         if (root.left) {
//             left = dfs(root.left) + 1;
//         } else {
//             left = 0;
//         }

//         if (root.right) {
//             right = dfs(root.right) + 1;
//         } else {
//             right = 0;
//         }

//         return Math.abs(left - right) <= 1;
//      }

//      return dfs(root);
//  }