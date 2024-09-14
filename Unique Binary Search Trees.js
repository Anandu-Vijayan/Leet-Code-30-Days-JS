// 96. Unique Binary Search Trees
// Solved
// Medium
// Topics
// Companies
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

// Example 1:


// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 19


var numTrees = function(n) {
    const cache = []
    return numTreeMemo(n, cache)
}

var numTreeMemo = function(n, cache) {
    // Base case
    if (n == 1) return 1
    // If we solved for n before, return saved answer
    if(cache[n]) return cache[n]
    
    let totalTrees = 0;
    //Pick each 'node' once as the root node
    for (let root = 1; root <= n; root ++) {
        let leftTrees = 1
        //Determine the number of unique BST on the left side of the root
        if (root > 1)  leftTrees = numTreeMemo(root-1, cache)
        let rightTrees = 1
        // And then on the right
        if (root < n) rightTrees = numTreeMemo(n - root, cache)
        //If left has 2 unique trees, and right has 3
        //that equals 2 * 3 for the total combinations
        totalTrees += leftTrees * rightTrees
    }
    cache[n] = totalTrees
    return totalTrees
    
};
