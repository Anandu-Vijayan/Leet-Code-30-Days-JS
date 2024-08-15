// 64. Minimum Path Sum
// Solved
// Medium
// Topics
// Companies
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

 

// Example 1:


// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 200


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const minGrid = grid.map(row => row.map(_ => Infinity))
    const m = grid.length - 1
    const n = grid[0].length - 1 
    
    function getMin(x, y) {
        let right = Infinity
        let down = Infinity
        if (x === m && y === n) {
            return grid[x][y]
        }
        if (minGrid[x][y] !== Infinity) {
            return minGrid[x][y]
        }
        if (x !== m) { // go right
            right = getMin(x+1, y)
        }
        if (y !== n) { // go down 
            down = getMin(x, y+1)
        }
        minGrid[x][y] = Math.min(right, down) + grid[x][y]
        return minGrid[x][y]
    }

    return getMin(0,0)
};