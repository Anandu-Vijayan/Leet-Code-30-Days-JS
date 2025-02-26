// 188. Best Time to Buy and Sell Stock IV
// Solved
// Hard
// Topics
// Companies
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

// Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
// Example 2:

// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

// Constraints:

// 1 <= k <= 100
// 1 <= prices.length <= 1000
// 0 <= prices[i] <= 1000


const {max} = Math;
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(k, prices) {
    /**
     * DP(i, j) = max(buy_i, dont_buy_i)
     * dont_buy_i = DP(i-1, j)
     * buy_i = max(for x up to i: buy_on_x sell_i)
     *       =  price(i) x->i-1 max( DP(x, j-1) - price(x))
     *      
     *               | DP(i-1, j)
     * DP(i,j) = max |  
     *)              | DP(x, j-1) - price(x) : 0 < x < i
     * DP(0, j) = 0
     * DP(i, 0) = 0
     */

    const n = prices.length;
    const DP_j1 = new Array(n).fill(0);
    for (let j = 1; j <= k; j++) {
        let best_buy_on_x = -prices[0];
        let last_DP = 0;
        for (let i = 1; i < n; i++) {
            best_buy_on_x = max(best_buy_on_x, DP_j1[i-1] - prices[i-1]);
            DP_j1[i-1] = last_DP
            last_DP = max(last_DP, best_buy_on_x + prices[i]);
        }
        DP_j1[n-1] = last_DP
        
    }
    
    return DP_j1.pop()
}