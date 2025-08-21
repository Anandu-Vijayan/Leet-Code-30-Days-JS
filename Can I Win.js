// 464. Can I Win
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.

// What if we change the game so that players cannot re-use integers?

// For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.

// Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise, return false. Assume both players play optimally.

 

// Example 1:

// Input: maxChoosableInteger = 10, desiredTotal = 11
// Output: false
// Explanation:
// No matter which integer the first player choose, the first player will lose.
// The first player can choose an integer from 1 up to 10.
// If the first player choose 1, the second player can only choose integers from 2 up to 10.
// The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
// Same with other integers chosen by the first player, the second player will always win.
// Example 2:

// Input: maxChoosableInteger = 10, desiredTotal = 0
// Output: true
// Example 3:

// Input: maxChoosableInteger = 10, desiredTotal = 1
// Output: true


/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
function canIWin(maxChoosableInteger, desiredTotal) {
    
    if (desiredTotal === 0) return true;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;

    const initialChoices = Math.pow(2, maxChoosableInteger) - 1;
    
    const dp = [];
    
    function DP(choices, total) {
        if (total <= 0) return false;
        
        if (dp[choices] !== undefined) {
            return dp[choices];
        }
        
        let pow = 0;
        let choicesCopy = choices;
        
        dp[choices] = false;
        
        while (choicesCopy > 0) {
            if (choicesCopy % 2 && !DP(choices - (1 << pow), total - pow - 1)) {
                dp[choices] = true;
                break;
            }
            choicesCopy >>= 1;
            pow++;
        }
        
        return dp[choices];
    }
    
    return DP(initialChoices, desiredTotal);
}