// 44. Wildcard Matching
// Solved
// Hard
// Topics
// Companies
// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 

// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const sLen = s.length;
    const pLen = p.length;
    let sIdx = 0, pIdx = 0, lastWildIdx = -1, sBackIdx = -1, nxtWildIdx = -1;
    while (sIdx < sLen) {
        if (pIdx < pLen && (p[pIdx] === '?' || p[pIdx] === s[sIdx])) {
            pIdx++;
            sIdx++;
        } else if (pIdx < pLen && p[pIdx] === '*') {
            lastWildIdx = pIdx;
            nxtWildIdx = ++pIdx;
            sBackIdx = sIdx;
        } else if (lastWildIdx === -1) {
            return false;
        } else {
            pIdx = lastWildIdx;
            sIdx = ++sBackIdx;
        }
    }

    for (let i = pIdx; i < pLen; i++) {
        if(p[i] !== '*') return false;
    }

    return true;
};