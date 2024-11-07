// 1657. Determine if Two Strings Are Close
// Solved
// Medium
// Topics
// Companies
// Hint
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"


var closeStrings = function(word1, word2) {
    const len1 = word1.length, len2 = word2.length
 if(len1 !== len2) return false
 const a = ('a').charCodeAt(0)
 const arr1 = Array(26).fill(0)
 const arr2 = Array(26).fill(0)
 for(let i = 0; i < len1; i++) {
   arr1[word1.charCodeAt(i) - a]++
   arr2[word2.charCodeAt(i) - a]++
 }
 return chk1(arr1, arr2)
 function chk1(a1, a2) {
   const a11 = a1.slice(0)
   a11.sort()
   const a22 = a2.slice(0)
   a22.sort()
   for(let i = 0, len = a1.length; i < len; i++) {
     if((a1[i] !== 0 && a2[i] === 0) || (a1[i] === 0 && a2[i] !== 0) ) return false
   }
   for(let i = 0, len = a1.length; i < len; i++) {
     if(a11[i] !== a22[i]) return false
   }
   return true
 }
};