// 541. Reverse String II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const number = Math.floor(s.length / (2*k));
    const remaining = s.length % (2 * k);
    let newS = '';
    for(let i = 0; i < number; i++){
        const slice = s.slice(i*2*k, (i+1)*2*k);
        const reversed = slice.slice(0,k).split('').reverse().join('');
        newS = newS + reversed + slice.slice(k);
    }
    if(remaining > 0){
        const remainingString = s.slice(-remaining)
        if(remaining < k){
            newS = newS + remainingString.split('').reverse().join('');
        }else{
            const reversed = remainingString.slice(0,k).split('').reverse().join('');
            newS = newS + reversed + remainingString.slice(k);
        }   
    }
    return newS
};