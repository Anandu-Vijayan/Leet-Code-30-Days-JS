// 233. Number of Digit One
// Solved
// Hard
// Topics
// Companies
// Hint
// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

 

// Example 1:

// Input: n = 13
// Output: 6
// Example 2:

// Input: n = 0
// Output: 0
 

// Constraints:

// 0 <= n <= 109


var countDigitOne = function(n) {
    if(n <= 0) return 0;
    if(n < 10) return 1;
    var base = Math.pow(10, n.toString().length - 1);
    var answer = parseInt(n / base);
    return countDigitOne(base - 1) * answer + (answer === 1 ? (n - base + 1) : base) + countDigitOne(n % base);
};