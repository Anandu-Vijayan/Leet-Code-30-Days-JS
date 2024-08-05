// 54. Spiral Matrix
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    if(!matrix.length){
        return [];
    }
    let row = matrix.length;
    let column = matrix[0].length;
    let top = 0;
    let bottom = row - 1;
    let left = 0;
    let right = column - 1;

    while(top <= bottom && left <= right){
        for(let col = left; col <= right; col++){
            result.push(matrix[top][col]);
        }
        top++;
        if(top > bottom) break;

        for(let row = top; row <= bottom; row++){
            result.push(matrix[row][right]);
        }
        right--;
        if(left > right) break;

        for(let col = right; col >= left; col--){
            result.push(matrix[bottom][col]);
        }
        bottom--;
        if(top > bottom) break;

        for(let row = bottom; row >= top; row--){
            result.push(matrix[row][left]);
        }
        left++;
    }
    return result;
};