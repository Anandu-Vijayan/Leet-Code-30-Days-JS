// 459. Repeated Substring Pattern
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0 && s.slice(0, i).repeat(n / i) === s) {
            return true;
        }
    }
    
    return false;    
};