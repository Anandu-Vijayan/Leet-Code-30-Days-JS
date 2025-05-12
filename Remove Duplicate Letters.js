// 316. Remove Duplicate Letters
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
 

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

var removeDuplicateLetters = function(s) {
    const lastOccurrence = {};
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    const stack = [];
    const visited = new Set();

    for (let i = 0; i < s.length; i++) {
        if (visited.has(s[i])) {
            continue;
        }

        while (
            stack.length > 0 &&
            s[i] < stack[stack.length - 1] &&
            i < lastOccurrence[stack[stack.length - 1]]
        ) {
            visited.delete(stack.pop());
        }

        visited.add(s[i]);
        stack.push(s[i]);
    }

    return stack.join('');    
};