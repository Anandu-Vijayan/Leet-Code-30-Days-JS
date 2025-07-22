// 423. Reconstruct Original Digits from English
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

 

// Example 1:

// Input: s = "owoztneoer"
// Output: "012"
// Example 2:

// Input: s = "fviefuro"
// Output: "45"
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is one of the characters ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"].
// s is guaranteed to be valid.

const DIGITS = [
    ["0",25,[14]],
    ["2",22,[14]],
    ["4",20,[5,14]],
    ["6",23,[18,8]],
    ["8",6,[8,7]],
    ["5",5,[8]],
    ["7",18,[]],
    ["3",7,[]],
    ["9",8,[]],
    ["1",14,[]]
]
var originalDigits = function(S) {
    let fmap = new Uint16Array(26),
        ans = new Array(10), len = S.length
    for (let i = 0; i < len; i++)
        fmap[S.charCodeAt(i) - 97]++
    for (let i = 0; i < 10; i++) {
        let [dig, char, rems] = DIGITS[i],
            count = fmap[char]
        for (let j = 0; j < rems.length; j++)
            fmap[rems[j]] -= count
        ans[dig] = dig.repeat(count)
    }
    return ans.join("")
};