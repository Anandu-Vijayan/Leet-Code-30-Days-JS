// 168. Excel Sheet Column Title
// Solved
// Easy
// Topics
// Companies
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
 

// Constraints:

// 1 <= columnNumber <= 231 - 1

var convertToTitle = function(columnNumber) {
    let res = "";

    while (columnNumber > 0) {
        columnNumber--;
        res = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + res;
        columnNumber = Math.floor(columnNumber / 26);
    }
    
    return res;    
};