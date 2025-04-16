// 264. Ugly Number II
// Solved
// Medium
// Topics
// Companies
// Hint
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

 

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 

// Constraints:

// 1 <= n <= 1690

var nthUglyNumber = function (n) {
    let id2 = 0
    let id3 = 0
    let id5 = 0

    let uglyNumbers = [1]

    while (uglyNumbers.length < n) {
        let val2 = uglyNumbers[id2] * 2
        let val3 = uglyNumbers[id3] * 3
        let val5 = uglyNumbers[id5] * 5

        let next = Math.min(val2, val3, val5)
        uglyNumbers.push(next)

        if (next == val2) id2++
        if (next == val3) id3++
        if (next == val5) id5++

    }
    
    return uglyNumbers[n-1]
};