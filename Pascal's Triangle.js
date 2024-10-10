// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30


var generate = function(numRows) {
    let triangle=[]

    for (let i=0 ;i<numRows;i++){
        triangle[i] = [1];

        for(j=1;j<i;j++){
            triangle[i][j] = triangle[i-1][j-1]+triangle[i-1][j]
        }
        if(i>0){
            triangle[i].push(1);
        }
    }
    return triangle;
};
