// 1926. Nearest Exit from Entrance in Maze
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

 

// Example 1:


// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.
// Example 2:


// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.
// Example 3:


// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.
 

// Constraints:

// maze.length == m
// maze[i].length == n
// 1 <= m, n <= 100
// maze[i][j] is either '.' or '+'.
// entrance.length == 2
// 0 <= entrancerow < m
// 0 <= entrancecol < n
// entrance will always be an empty cell.


var nearestExit = function(maze, entrance) {
    //helper function to check if a cell is valid
    let isValid = (row, col) => {
        return row >= 0 && col >= 0 && row < maze.length && col < maze[0].length && maze[row][col] !== '+' 
    }
    //helper function to determine when we are at an exit
    let isExit = (row, col) => {
  return (row === 0 || col === 0 || row === maze.length - 1 || col === maze[0].length - 1) && maze[row][col] === '.' 
}
    //initializing an array to store seen nodes
    let seen = []
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }
    //marking the entrance as seen
    seen[entrance[0]][entrance[1]] = true
    //initializing our entrance node in the queue
    let queue = [entrance]
    let dir = [[0,1], [1, 0], [-1, 0], [0, -1]]
    let steps = 0

    while (queue.length) {
        let nextQueue = []
        //because our entrance is not an exit, we have to take a step
        steps++
        //for every node in our queue
        for (let i = 0; i < queue.length; i++) {
            //get its row and column
            let [row, col] = queue[i]
            //iterate over the directions of every potential neighbor to check them
            for (const [dx, dy] of dir) {
                let nextRow = row + dx, nextCol = col + dy
                //if a node is valid and we have not seen it, then we: 
                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    //see if its an exit -- if it is, return steps
                    if (isExit(nextRow, nextCol)){ 
                        return steps
                    } else {
                    //otherwise we mark it as seen and push it into the queue so we can check its neighbors
                    seen[nextRow][nextCol] = true
                    nextQueue.push([nextRow, nextCol])
                    }
                }
            }

        }
        //reup our queue
        queue = nextQueue
    }
    return -1
};