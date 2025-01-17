// 132. Palindrome Partitioning II
// Solved
// Hard
// Topics
// Companies
// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// .

// Return the minimum cuts needed for a palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase English letters only.

const manachers = s => {
    const t = '#' + s.split('').join('#') + '#'
    const m = t.length
    const LPS = Array(m).fill(0)
    LPS[0] = 0
    LPS[1] = 1
    let center = 0, right = 0

    for (let i = 0; i < m; i++) {
        const mirrorIndex = 2 * center - i
        if (i <= right) LPS[i] = Math.min(right - i, LPS[mirrorIndex])
        while (i + LPS[i] + 1 < m && i - LPS[i] - 1 >= 0 && t[i + LPS[i] + 1] === t[i - LPS[i] - 1])
            LPS[i]++
        if (right < i + LPS[i]) {
            center = i
            right = i + LPS[i]
        }
    }

    return LPS
}

const minCut = s => {
    const n = s.length
    const dp = Array(n + 1).fill(Infinity)
    const LPS = manachers(s)
    dp[0] = 0

    for (let i = 0; i <= n; i++) {
        for (let j = i; j > 0; j--)
            if (LPS[i + j - 1] >= i - j + 1) dp[i] = Math.min(dp[i], dp[j - 1] + 1)
    }

    return dp[n] - 1
}