// 395. Longest Substring with At Least K Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

// if no such substring exists, return 0.

 

// Example 1:

// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 105

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let maxUnique = new Set(s).size;
    // we'll try substrings consisting of one distinct character to those consisting of maximum distinct characters
    let max = 0;
    for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
        let start = 0, end = 0, atLeastK = 0, unique = 0, m = new Map();
        while (end < s.length) {    
            m.set(s[end], m.get(s[end]) + 1 || 1);
            if (m.get(s[end]) == 1) unique++;
            if (m.get(s[end]) == k) atLeastK++;
            
            while (unique > curUnique) { // move left pointer so that the number of unique characters do not exceed the upper bound
                m.set(s[start], m.get(s[start]) - 1);
                if (m.get(s[start]) == k-1) atLeastK--;
                if (m.get(s[start]) == 0) unique--;
                start++;
            }
            if (unique == curUnique && unique == atLeastK) {
                max = Math.max(max, end - start + 1);
            } 
            end++;
        }
    }
    return max;
    // We are only considering lowercase alphaabets so maxUnique can be at most 26.
    // Therefore, Time complexity: O(26) * O(n) = O(n)
    // Space Complexity: O(26) = O(1)
};