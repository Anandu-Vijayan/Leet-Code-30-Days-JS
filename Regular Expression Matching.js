// 10. Regular Expression Matching
// Solved
// Hard
// Topics
// Companies
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.


var isMatch = function(s, p) {
    var dp = Array(s.length + 1).fill(0).map(_ => Array(p.length + 1));
    return amar(dp,0,0,s,p); 
 };
 var amar = function(dp,i,j,s,p){
     var res = false;
     if(dp[i][j] !== undefined) return dp[i][j];
     if(j === p.length){
         res = i === s.length;
     }else{
         if(i === s.length){
             res = p[j+1] === '*' && amar(dp,i,j+2,s,p);
         }else if(s[i] === p[j] || p[j] === '.'){
             if(p[j+1] === '*'){
                 res = amar(dp,i+1,j,s,p) || amar(dp,i,j+2,s,p) || amar(dp,i+1,j+2,s,p);  
             }else{
                 res = amar(dp,i+1,j+1,s,p);
             }
         }else{
             res = p[j+1] === '*' && amar(dp,i,j+2,s,p);
         }
     }
     dp[i][j] = res;
     return res;
     };