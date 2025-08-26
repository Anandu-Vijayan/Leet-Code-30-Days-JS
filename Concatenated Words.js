// 472. Concatenated Words
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct) in the given array.

 

// Example 1:

// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
// Example 2:

// Input: words = ["cat","dog","catdog"]
// Output: ["catdog"]
 

// Constraints:

// 1 <= words.length <= 104
// 1 <= words[i].length <= 30
// words[i] consists of only lowercase English letters.
// All the strings of words are unique.
// 1 <= sum(words[i].length) <= 105


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    // sort by length so we build longer words from shorter ones
    words.sort((a, b) => a.length - b.length);

    const dict = new Set();
    const result = [];

    for (const word of words) {
        if (word.length === 0) {
            dict.add(word);
            continue;
        }

        if (canForm(word, dict)) {
            result.push(word);
        }

        dict.add(word);
    }

    return result;
};

function canForm(word, dict) {
    if (dict.size === 0) return false;

    const n = word.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (!dp[j]) continue;
            if (dict.has(word.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}
