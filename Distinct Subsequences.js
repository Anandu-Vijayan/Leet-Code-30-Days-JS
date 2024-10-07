// 115. Distinct Subsequences
// Solved
// Hard
// Topics
// Companies
// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// The test cases are generated so that the answer fits on a 32-bit signed integer.

 

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit
// Example 2:

// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag
 

// Constraints:

// 1 <= s.length, t.length <= 1000
// s and t consist of English letters.



var numDistinct = function (s, t) {
    if (s.length < t.length) return 0;
    [s, t] = [t, s];

    let m = s.length;
    let n = t.length;
    let aa = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let j = 0; j <= n; j++) {
        aa[0][j] = 1;
    }

    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            if (s[i - 1] === t[j - 1]) {
                aa[i][j] = aa[i][j - 1] + aa[i - 1][j - 1];
            } else {
                aa[i][j] = aa[i][j - 1];
            }

    return aa[m][n];
};