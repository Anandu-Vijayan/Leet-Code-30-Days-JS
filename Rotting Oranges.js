// 994. Rotting Oranges
// Solved
// Medium
// Topics
// Companies
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

const orangesRotting = (grid) => {
  let freshes = 0;

  let rottens = 0;

  let stack = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const current = grid[i][j];

      if (current === 1) {
        freshes++;
        continue;
      }

      if (current === 2) {
        rottens++;

        stack.push({
          x: j,
          y: i,
        });
        continue;
      }
    }
  }

  let total = freshes + rottens;

  let minutes = 0;

  while (stack.length > 0) {
    const tempStack = [];

    let wasRotting = false;

    const rotting = (x, y) => {
      if (grid[y]?.[x] === 1) {
        tempStack.push({ x, y });

        grid[y][x] = 2;
        rottens++;

        wasRotting = true;
      }
    };

    for (let i = 0; i < stack.length; i++) {
      const { x, y } = stack[i];

      rotting(x - 1, y);
      rotting(x + 1, y);
      rotting(x, y - 1);
      rotting(x, y + 1);
    }

    stack = tempStack;

    minutes = wasRotting ? minutes + 1 : minutes;
  }

  return rottens === total ? minutes : -1;
};
