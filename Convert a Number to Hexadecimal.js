// 405. Convert a Number to Hexadecimal
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

 

// Example 1:

// Input: num = 26
// Output: "1a"
// Example 2:

// Input: num = -1
// Output: "ffffffff"
 

// Constraints:

// -231 <= num <= 231 - 1


var toHex = function(num) {
    if (num === 0) return "0";
    if (num < 0) num += 2 ** 32;

    const hex = "0123456789abcdef";
    let result = "";

    while (num > 0) {
        result = hex[num & 15] + result;
        num >>>= 4;
    }

    return result;
};