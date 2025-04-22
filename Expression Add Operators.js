// 282. Expression Add Operators
// Solved
// Hard
// Topics
// Companies
// Hint
// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

// Note that operands in the returned expressions should not contain leading zeros.

 

// Example 1:

// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
// Example 3:

// Input: num = "3456237490", target = 9191
// Output: []
// Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.
 

// Constraints:

// 1 <= num.length <= 10
// num consists of only digits.
// -231 <= target <= 231 - 1282. Expression Add Operators
// Solved
// Hard
// Topics
// Companies
// Hint
// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

// Note that operands in the returned expressions should not contain leading zeros.

 

// Example 1:

// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
// Example 3:

// Input: num = "3456237490", target = 9191
// Output: []
// Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.
 

// Constraints:

// 1 <= num.length <= 10
// num consists of only digits.
// -231 <= target <= 231 - 1


var addOperators = function(num, target) {
    const result = [];
    backtrack(num, target, result, 0, '', 0, 0);
    return result;
};

function backtrack(num, target, result, index, path, eval, prev) {
    if(index === num.length) {
        if(eval === target) {
            result.push(path);
            return;
        }
    }
    let cur = 0;
    for(let i = index; i < num.length; i++) {
        cur = cur * 10 + (num[i] - '0')
        
        if(index === 0) {
            backtrack(num, target, result, i + 1, path + cur, cur, cur);
        } else {
            backtrack(num, target, result, i + 1, path + '+' + cur, eval + cur, cur);
            backtrack(num, target, result, i + 1, path + '-' + cur, eval - cur, -1 * cur);
            backtrack(num, target, result, i + 1, path + '*' + cur, eval - prev + (prev * cur), prev * cur);
        }

        if (num[index] === '0') break;
    }
}