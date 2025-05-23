// 301. Remove Invalid Parentheses
// Solved
// Hard
// Topics
// Companies
// Hint
// Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

// Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.

 

// Example 1:

// Input: s = "()())()"
// Output: ["(())()","()()()"]
// Example 2:

// Input: s = "(a)())()"
// Output: ["(a())()","(a)()()"]
// Example 3:

// Input: s = ")("
// Output: [""]
 

// Constraints:

// 1 <= s.length <= 25
// s consists of lowercase English letters and parentheses '(' and ')'.
// There will be at most 20 parentheses in s.

var removeInvalidParentheses = function(s) {
    // sanity check
    if (!s.length) return [""];

    /**
     * @param {Number} l - invalid '(' needs to be removed
     * @param {Number} r - invalid ')' needs to be removed
     * @param {Number} i - current position
     * @param {Number} a - current result assembly
     * @param {Number} c - bracket counter (check validness) 
     * when c < 0, it means we have an extra ')' up to the current point, 
     * which means the string will never be valid
     */
    var dfs = function(l, r, i, a, c) {
        if (l < 0 || r < 0 || c < 0) return;
        if (i == s.length) {
            if (l==0 && r==0 && c==0) result.add(a);
            return;
        }

        if (s[i] == '(' || s[i] == ')') {
            let f = s[i]=='('; // flag
            dfs(l, r, i+1, a+s[i], c+(f?1:-1)); // keep
            dfs(l-(f?1:0),r-(f?0:1), i+1, a, c) // remove
        } else {
            dfs(l, r, i+1, a+s[i], c);
        }
    }

    // count invalid parentheses
    let lc = 0, rc = 0;
    for (let i=0;i<s.length;i++) {
        if (s[i] == '(') lc++;
        else if (s[i] == ')') {
            if (lc > 0) lc--;
            else rc++;
        }
    }

    let result = new Set();
    dfs(lc, rc, 0, "", 0);
    return [...result.values()];
}