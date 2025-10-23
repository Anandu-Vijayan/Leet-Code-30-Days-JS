// 542. 01 Matrix
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two cells sharing a common edge is 1.

 

// Example 1:


// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:


// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.
 

// Note: This question is the same as 1765: https://leetcode.com/problems/map-of-highest-peak/


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (const [dr, dc] of directions) {
            const new_row = row + dr;
            const new_col = col + dc;

            if (new_row >= 0 && new_row < rows && new_col >= 0 && new_col < cols && mat[new_row][new_col] > mat[row][col] + 1) {
                mat[new_row][new_col] = mat[row][col] + 1;
                queue.push([new_row, new_col]);
            }
        }
    }

    return mat;    
};