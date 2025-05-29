// 343. Integer Break
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 

// Constraints:

// 2 <= n <= 58


/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }

    // Try to divide n into as many threes as possible
    let threes = Math.floor(n / 3);
    let remainder = n % 3;

    if (remainder === 1) {
        threes -= 1; // remove 3 * 1
        remainder = 4; // create 2 * 2
    } else if (remainder === 0) {
        remainder = 1; // when remainder is 0, set 1 which doesn't affect your answer.
    }

    return Math.pow(3, threes) * remainder;    
};