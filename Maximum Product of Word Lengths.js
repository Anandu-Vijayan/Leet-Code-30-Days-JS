// 318. Maximum Product of Word Lengths
// Solved
// Medium
// Topics
// Companies
// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

 

// Example 1:

// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:

// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
// Example 3:

// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.
 

// Constraints:

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

var maxProduct = function(words) {
    words.sort((a,b) => b.length - a.length)
    let best = 0, bitsets = new Uint32Array(words.length)
    for (let i = 0; i < words.length; i++) {
        let word = words[i], wlen = word.length, bitset = 0
        if (wlen * words[0].length < best)
            return best
        for (let j = 0; j < wlen; j++)
            bitset |= 1 << (word.charCodeAt(j) - 97)
        for (let j = 0; j < i; j++)
            if ((bitsets[j] & bitset) === 0)
                best = Math.max(best, wlen * words[j].length)
        bitsets[i] = bitset
    }
    return best
};