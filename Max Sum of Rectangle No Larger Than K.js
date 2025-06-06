// 363. Max Sum of Rectangle No Larger Than K
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

// It is guaranteed that there will be a rectangle with a sum no larger than k.

 

// Example 1:


// Input: matrix = [[1,0,1],[0,-2,3]], k = 2
// Output: 2
// Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
// Example 2:

// Input: matrix = [[2,2,-1]], k = 3
// Output: 3
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -100 <= matrix[i][j] <= 100
// -105 <= k <= 105
 

// Follow up: What if the number of rows is much larger than the number of columns?


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const maxSumSubmatrix = function(matrix, k) {
  let max = -Infinity;
  const R = matrix.length, C = matrix[0].length;
  const sums = Array(R);
  // Try starting from column 0 to the rightmost column
  for (let c1 = 0; c1 < C; c1 += 1) {
    // Because we start with a new column, we should clear sums
    sums.fill(0);
    // Scan through the rest of the columns
    for (let c2 = c1; c2 < C; c2 += 1) {
      // Update current sums for each row, sums[r] = sum(matrix[r][c1:c2]) 
      for (let row = 0; row < R; row += 1) {
        sums[row] += matrix[row][c2];
      }
      // console.log(sums) to see values of sums
      for (let r1 = 0; r1 < R; r1 += 1) {
        let sum = 0;
        for (let r2 = r1; r2 < R; r2 += 1) {
          // Calculate sum for current rectangle: sum(matrix[r1:r2, c1:c2])
          sum += sums[r2];
          // Update target max sum
          if (sum > max && sum <= k) {
            max = sum;
          }
        }
      }
    }
  }
  return max;
};