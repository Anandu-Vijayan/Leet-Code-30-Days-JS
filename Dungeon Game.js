// 174. Dungeon Game
// Solved
// Hard
// Topics
// Companies
// The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.

// The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

// Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

// To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

// Return the knight's minimum initial health so that he can rescue the princess.

// Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

 

// Example 1:


// Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
// Output: 7
// Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.
// Example 2:

// Input: dungeon = [[0]]
// Output: 1
 

// Constraints:

// m == dungeon.length
// n == dungeon[i].length
// 1 <= m, n <= 200
// -1000 <= dungeon[i][j] <= 1000

var calculateMinimumHP = function(dungeon) {
    const n = dungeon.length;
    const m = dungeon[0].length;

    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    return helper(dungeon, n, m, 0, 0, dp);
};

var helper = function(dungeon, n, m, row, col, dp) {
    // base condition 1
    if (row === n - 1 && col === m - 1) {
        return Math.max(1, 1 - dungeon[row][col]);
    }

    // base condition 2
    if (row >= n || col >= m) {
        return Infinity;
    }

    if (dp[row][col] !== 0) {
        return dp[row][col];
    }

    const right = helper(dungeon, n, m, row, col + 1, dp);
    const down = helper(dungeon, n, m, row + 1, col, dp);

    // Calculate the minimum health needed at the current position
    dp[row][col] = Math.max(1, Math.min(right, down) - dungeon[row][col]);

    return dp[row][col];
};