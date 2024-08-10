// 59. Spiral Matrix II
// Solved
// Medium
// Topics
// Companies
// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 20

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let x = 0, y = 0, dx = 1, dy = 0;
    let res = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    for (let i = 0; i < n * n; i++) {
        res[y][x] = i + 1;

        if (!(0 <= x + dx && x + dx < n && 0 <= y + dy && y + dy < n && res[y+dy][x+dx] === 0)) {
            [dx, dy] = [-dy, dx];
        }
                
        x += dx;
        y += dy;
    }

    return res;    
};