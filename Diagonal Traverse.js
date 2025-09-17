// 498. Diagonal Traverse
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

// Example 1:


// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// -105 <= mat[i][j] <= 105
 


/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = mat => {
    const key = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (!key[i + j]) key[i + j] = [];
            key[i + j].push(mat[i][j]);
        }
    }

    const res = [];

    for (let i = 0; i < key.length; i++) {
        res.push(i & 1 ? key[i] : key[i].reverse());
    }

    return res.flat();
};