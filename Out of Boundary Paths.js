// 576. Out of Boundary Paths
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

// Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

 

// Example 1:


// Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
// Output: 6
// Example 2:


// Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
// Output: 12
 

// Constraints:

// 1 <= m, n <= 50
// 0 <= maxMove <= 50
// 0 <= startRow < m
// 0 <= startColumn < n


var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const MOD = 1e9 + 7;
    const dp = Array.from({ length: maxMove + 1 }, () => 
                Array.from({ length: m }, () => Array(n).fill(0)));
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    for (let move = 1; move <= maxMove; move++) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (let [dx, dy] of dirs) {
                    const x = i + dx, y = j + dy;
                    if (x < 0 || x >= m || y < 0 || y >= n) {
                        dp[move][i][j] += 1;
                    } else {
                        dp[move][i][j] = (dp[move][i][j] + dp[move-1][x][y]) % MOD;
                    }
                }
            }
        }
    }
    return dp[maxMove][startRow][startColumn] % MOD;
};