// 383. Ransom Note
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


var canConstruct = function (ransomNote, magazine) {

let map = {}

for(let char of magazine){
    map[char] = (map[char] || 0)+1
}
for(let char of ransomNote){
    if(!map[char]){
        return false
    }
    map[char]--
}
return true

};