// 538. Convert BST to Greater Tree
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
// Example 2:

// Input: root = [0,null,1]
// Output: [1,null,1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -104 <= Node.val <= 104
// All the values in the tree are unique.
// root is guaranteed to be a valid binary search tree.
 

// Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/



/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if(!root) return root;
    
//     arr = sumarr in this functions
    function rec(root, arr){
        if(root){
            rec(root.right, arr);
            root.val+= arr.pop();
            rec(root.left, arr);
            
        }    
    }
    
//     converting tree to a sorted array
    let arr = toarray(root);
    let sumarr = new Array(arr.length);
    let prev = 0;
//     forming a special type of sum array needed
    for(let i = arr.length-1; i>=0; i--){
        sumarr[i] = prev;
        prev+= arr[i];
    }
    
    
    
    // calling the recursive function to modify the value at each instant
    rec(root, sumarr);
    
    return root;
    
};

function toarray(root, arr=[]){
    if(root){
        toarray(root.left, arr);
        arr.push(root.val);
        toarray(root.right, arr);
        return arr;
    }
}