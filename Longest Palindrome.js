// 409. Longest Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freqMapper = new Map();
    let isOdd = false;
    for (let i = 0; i < s.length; i++) {
        let actualChar = s[i];
        freqMapper.set(actualChar,(freqMapper.get(actualChar) || 0) + 1);
    }
    let length = 0;
    for (let [key,val] of freqMapper) {
        if ((val % 2) === 0) {
            length += val;
        } else {
            length += val - 1;
            isOdd = true;
        }
    }
    if (isOdd) {
        length += 1;
    }
    return length;
};