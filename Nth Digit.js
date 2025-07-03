// 400. Nth Digit
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

 

// Example 1:

// Input: n = 3
// Output: 3
// Example 2:

// Input: n = 11
// Output: 0
// Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
 

// Constraints:

// 1 <= n <= 231 - 1



var findNthDigit = function(n) {
    let length = 1, count = 9, start = 1;

    while (n > length * count) {
        n -= length * count;
        length++;
        count *= 10;
        start *= 10;
    }

    start += Math.floor((n - 1) / length);
    const s = start.toString();
    return parseInt(s[(n - 1) % length]);
};