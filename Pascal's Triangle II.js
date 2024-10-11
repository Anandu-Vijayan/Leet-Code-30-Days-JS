// 119. Pascal's Triangle II
// Solved
// Easy
// Topics
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 


var getRow = function(rowIndex) {
    let row = [1];

    for (let i = 0; i < rowIndex; i++) {
        row = row.map((val, index) => (row[index - 1] || 0) + (row[index] || 0));
        row.push(1);
    }

    return row;    
};
