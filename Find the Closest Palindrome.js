// 564. Find the Closest Palindrome
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.

// The closest is defined as the absolute difference minimized between two integers.

 

// Example 1:

// Input: n = "123"
// Output: "121"
// Example 2:

// Input: n = "1"
// Output: "0"
// Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.
 

// Constraints:

// 1 <= n.length <= 18
// n consists of only digits.
// n does not have leading zeros.
// n is representing an integer in the range [1, 1018 - 1].




/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const length = n.length;
    const prefix = BigInt(n.slice(0, Math.ceil(length / 2)));
    const candidates = new Set([
        (BigInt(10) ** BigInt(length - 1) - BigInt(1)).toString(), // 999...999 (one less digit)
        (BigInt(10) ** BigInt(length) + BigInt(1)).toString(),     // 100...001 (one more digit)
    ]);

    for (let i = -1; i <= 1; i++) {
        const newPrefix = (prefix + BigInt(i)).toString();
        const candidate = length % 2 === 0
            ? newPrefix + newPrefix.split('').reverse().join('')
            : newPrefix + newPrefix.slice(0, -1).split('').reverse().join('');
        candidates.add(candidate);
    }

    candidates.delete(n);

    let nearest = null;
    let minDiff = null;
    for (let candidate of candidates) {
        const diff = BigInt(candidate) - BigInt(n);
        const absDiff = diff < 0 ? -diff : diff;

        if (minDiff === null || absDiff < minDiff || (absDiff === minDiff && BigInt(candidate) < BigInt(nearest))) {
            minDiff = absDiff;
            nearest = candidate;
        }
    }

    return nearest;
};