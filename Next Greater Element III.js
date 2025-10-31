// 556. Next Greater Element III
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1
 

// Constraints:

// 1 <= n <= 231 - 1
 

var nextGreaterElement = function(n) {
    let digits = n.toString().split('');
    let i = digits.length - 2;

    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i === -1) return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) j--;
    [digits[i], digits[j]] = [digits[j], digits[i]];

    let left = i + 1, right = digits.length - 1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }

    let result = parseInt(digits.join(''));
    return result <= 2 ** 31 - 1 ? result : -1;
};