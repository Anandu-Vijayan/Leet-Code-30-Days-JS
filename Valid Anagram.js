// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


var isAnagram = function(s, t) {
    const arr = Array(27).fill(0);
    if(s.length !== t.length) {
        return false;
    }
    for(let i =0; i< s.length; i+=1){
        arr[s.charCodeAt(i) - 97] += 1;
    }
    for(let i =0; i< t.length; i+=1){
        arr[t.charCodeAt(i) - 97] -= 1;
    }
    let sum =0;
    arr.forEach(elem => sum += Math.abs(elem));
    if(sum > 0){
        return false;
    }
    return true;
};