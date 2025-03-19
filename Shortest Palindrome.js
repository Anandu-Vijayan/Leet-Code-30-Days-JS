// 214. Shortest Palindrome
// Solved
// Hard
// Topics
// Companies
// You are given a string s. You can convert s to a palindrome by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

 

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of lowercase English letters only.

var shortestPalindrome=(s,
    z=[...s].reverse().join``
)=>z+s.slice([,...s].findLastIndex(
    (x,i)=>s.slice(0,i)==z.slice(-i)
))