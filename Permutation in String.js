// 567. Permutation in String
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.


var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    
    let s1Count = {};
    let s2Count = {};
    
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1;
        s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1;
    }
    
    if (isEqual(s1Count, s2Count)) {
        return true;
    }
    
    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
        s2Count[s2[right]] = (s2Count[s2[right]] || 0) + 1;
        s2Count[s2[left]]--;
        
        if (s2Count[s2[left]] === 0) {
            delete s2Count[s2[left]];
        }
        
        left++;
        
        if (isEqual(s1Count, s2Count)) {
            return true;
        }
    }
    
    return false;    
};

function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}