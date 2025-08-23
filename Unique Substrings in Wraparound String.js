// 467. Unique Substrings in Wraparound String
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// We define the string base to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so base will look like this:

// "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
// Given a string s, return the number of unique non-empty substrings of s are present in base.

 

// Example 1:

// Input: s = "a"
// Output: 1
// Explanation: Only the substring "a" of s is in base.
// Example 2:

// Input: s = "cac"
// Output: 2
// Explanation: There are two substrings ("a", "c") of s in base.
// Example 3:

// Input: s = "zab"
// Output: 6
// Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab") of s in base.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    const counts = new Map();
    let maxLen = 0;
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) + 26) % 26 === 1) {
            maxLen++;
        } else {
            maxLen = 1;
        }
        const char = s[i];
        if (!counts.has(char) || maxLen > counts.get(char)) {
            total += maxLen - (counts.get(char) || 0);
            counts.set(char, maxLen);
        }
    }

    return total;
};