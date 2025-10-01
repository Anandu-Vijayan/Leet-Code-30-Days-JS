// 516. Longest Palindromic Subsequence
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // Get the length of the input string
    const n = s.length;
    // Initialize a 2D array to store the length of the longest palindromic subsequence
    const dp = Array(n).fill().map(() => Array(n).fill(0));
    
    // Iterate over the substrings in reverse order to fill in the dp table bottom-up
    for (let i = n-1; i >= 0; i--) {
        // Base case: the longest palindromic subsequence of a single character is 1
        dp[i][i] = 1;
        for (let j = i+1; j < n; j++) {
            // If the two characters match, the longest palindromic subsequence can be extended by two
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                // Otherwise, we take the maximum of the two possible substrings
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    
    // The length of the longest palindromic subsequence is in the top-right corner of the dp table
    return dp[0][n-1];
};