// 49. Group Anagrams
// Solved
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // brute force double loops to check ever iteration of following word to see if match and adds to array.
    // loop through, add sorted string to map if it doesn't exist. if it does, add to results array.
    const map = new Map();
    const output = [];

    for (let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split('').sort().join('');

        if (map.has(sortedWord)) {
            map.get(sortedWord).push(strs[i]);
        } else {
            map.set(sortedWord, [strs[i]]);
        }
    }
    
    map.forEach(arr => output.push(arr));

    return output;
};