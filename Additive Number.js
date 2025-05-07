// 306. Additive Number
// Solved
// Medium
// Topics
// Companies
// An additive number is a string whose digits can form an additive sequence.

// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

// Given a string containing only digits, return true if it is an additive number or false otherwise.

// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

// Example 1:

// Input: "112358"
// Output: true
// Explanation: 
// The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// Example 2:

// Input: "199100199"
// Output: true
// Explanation: 
// The additive sequence is: 1, 99, 100, 199. 
// 1 + 99 = 100, 99 + 100 = 199
 

// Constraints:

// 1 <= num.length <= 35
// num consists only of digits.
 

// Follow up: How would you handle overflow for very large input integers?

var isAdditiveNumber = function(num) {
    const isValid = (a, b, s) => {
        if (s.length === 0) return true;
        const sum = (a + b).toString();
        return s.startsWith(sum) && isValid(b, parseInt(sum), s.slice(sum.length));
    };

    const n = num.length;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const a = num.slice(0, i);
            const b = num.slice(i, j);
            if ((a.startsWith('0') && a.length > 1) || (b.startsWith('0') && b.length > 1)) continue;
            if (isValid(parseInt(a), parseInt(b), num.slice(j))) return true;
        }
    }
    return false;
};