// 85. Maximal Rectangle
// Solved
// Hard
// Topics
// Companies
// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

// Example 1:


// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.
// Example 2:

// Input: matrix = [["0"]]
// Output: 0
// Example 3:

// Input: matrix = [["1"]]
// Output: 1
 

// Constraints:

// rows == matrix.length
// cols == matrix[i].length
// 1 <= row, cols <= 200
// matrix[i][j] is '0' or '1'.



/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let maximalRectangle = 0
    let line = new Array(matrix[0].length).fill(0)
    for(let i=0; i< matrix.length; i++){
         for(let j=0;j<line.length;j++){
            if(matrix[i][j]==0)line[j]=0
            else line[j]+=+matrix[i][j]
         }
         for(let j=0; j<line.length;j++){
            let lineMaximal = line[j]
            if(lineMaximal*line.length>maximalRectangle){
                let left=j
                while(line[--left]>=line[j]);
                left++

                let right=j
                while(right<line.length && line[++right]>=line[j]);
                lineMaximal=(right-left)*line[j]
                if(lineMaximal>maximalRectangle)maximalRectangle=lineMaximal
            }
         }
    }

    return maximalRectangle
};