// 1143. Longest Common Subsequence
// Medium
// Topics
// Companies
// Hint
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

var longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text1.length).fill(0);
    let longest = 0;

    for (const c of text2) {
        let curLength = 0;
        for (let i = 0; i < dp.length; i++) {
            if (curLength < dp[i]) {
                curLength = dp[i];
            } else if (c === text1[i]) {
                dp[i] = curLength + 1;
                longest = Math.max(longest, curLength + 1);
            }
        }
    }

    return longest;    
};