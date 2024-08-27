// 76. Minimum Window Substring
// Solved
// Hard
// Topics
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";
    
    const map = new Array(128).fill(0);
    let count = t.length;
    let start = 0, minStart = 0, minLen = Infinity;
    
    for (let c of t) {
        map[c.charCodeAt(0)]++;
    }
    
    for (let end = 0; end < s.length; end++) {
        if (map[s.charCodeAt(end)]-- > 0) count--;
        
        while (count === 0) {
            if (end - start + 1 < minLen) {
                minStart = start;
                minLen = end - start + 1;
            }
            
            if (map[s.charCodeAt(start++)]++ === 0) count++;
        }
    }
    
    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};