// 357. Count Numbers with Unique Digits
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

 

// Example 1:

// Input: n = 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
// Example 2:

// Input: n = 0
// Output: 1
 

// Constraints:

// 0 <= n <= 8


var countNumbersWithUniqueDigits = function(n) {
    return [1,10,91,739,5275,32491,168571,712891,2345851][n]
};