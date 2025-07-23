// 424. Longest Repeating Character Replacement
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

var characterReplacement = function(s, k) {
    /**
        smallFreq = windowSize - maxFreq => (R - L + 1) - maxFreq 
        s = "ABAB", k = 1
        charFreq = [0, 0]
        maxFreq = 0

        s = "A B A B"
             L
             R
        charFreq = [1, 0]
        maxFreq = max(maxFreq, charFreq[R]) => max(0, 1) => 1
        if (R - L + 1 - maxFreq > K)
        if (0 > 1)

        s = "A B A B"
             L R
        charFreq = [1, 1]
        maxFreq = max(1, 1) => 1
        if (1 > 1)

        s = "A B A B"
             L   R
        charFreq = [2, 1]
        maxFreq = max(1, 2) => 2
        if (1 > 1)

        s = "A B A B"
             L     R
        charFreq = [2, 2]
        maxFreq = max(2, 2) => 2
        if (2 > 1)
        charFreq = [1, 2]
        s = "A B A B"
               L   R
               
        return = s.length - left
        * We only move left when we exceed the replacement allowed
    
     */

     let left = 0;
     let charFreq = new Array(26).fill(0);
     let maxFreq = 0;

     for (let right = 0; right < s.length; right++) {
        charFreq[s.charCodeAt(right) - 65]++
        maxFreq = Math.max(maxFreq, charFreq[s.charCodeAt(right) - 65])

        if ((right - left + 1) - maxFreq > k) {
            charFreq[s.charCodeAt(left) - 65]--
            left++
        }
     }

     return s.length - left


};