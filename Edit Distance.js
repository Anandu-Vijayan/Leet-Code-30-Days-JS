// 72. Edit Distance
// Solved
// Medium
// Topics
// Companies
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // Get the lengths of the strings
    const n = word1.length;
    const m = word2.length;

    // Initialize the 1D array with 0s
    const dp = new Array(m + 1).fill(0);

    // Populate the first row of the array
    for (let i = 1; i <= m; i++) {
        // The number of operations to reach the ith character
        dp[i] = i;
    }

    // Fill the array
    for (let i = 1; i <= n; i++) {
        // The number of operations to reach the previous character
        let prev = dp[0];
        // The number of operations to reach the current character
        dp[0] = i;
        for (let j = 1; j <= m; j++) {
            // The number of operations to reach the current character
            const temp = dp[j];
            if (word1[i - 1] === word2[j - 1]) {
                // The number of operations to reach the current character is the same as the previous character
                dp[j] = prev;
            } else {
                // The number of operations to reach the current character is the minimum of the previous character, the current character, and the previous character minus 1
                dp[j] = 1 + Math.min(dp[j], prev, dp[j - 1]);
            }
            prev = temp;
        }
    }

    // Return the last element of the array
    // The number of operations to reach the last character
    return dp[m];
};