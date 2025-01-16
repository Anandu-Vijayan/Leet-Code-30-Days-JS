// 131. Palindrome Partitioning
// Solved
// Medium
// Topics
// Companies
// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.


const cache = Object.create(null);
const isPal = (s, l, r) => {
    while (l <= r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
        const res = [];
        const curr = [];
        const backtrack = (str) => {
            if (!str.length) {
                return res.push([...curr]);
            }
            const l = str.length;
            for (let i = 0; i < str.length; i++) {
                if (isPal(str, 0, i)) {
                    curr.push(str.slice(0, i + 1));
                    backtrack(str.slice(i + 1));
                    curr.pop();
                }
            }
        }

        backtrack(s);

        return res  
};