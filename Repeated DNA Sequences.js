// 187. Repeated DNA Sequences
// Solved
// Medium
// Topics
// Companies
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either 'A', 'C', 'G', or 'T'.

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    if (s.length <= 10) return []
  
    const seen = new Set()
    const repeted = new Set()
  
    for (let i = 0; i < s.length - 9; i++) {
      const sequence = s.slice(i, i + 10)
      if(!seen.has(sequence)) {
        seen.add(sequence)
        continue
      }
      repeted.add(sequence)
    }
  
    return Array.from(repeted)
  };