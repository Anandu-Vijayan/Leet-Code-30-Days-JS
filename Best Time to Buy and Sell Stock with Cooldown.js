// 309. Best Time to Buy and Sell Stock with Cooldown
// Solved
// Medium
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
// Example 2:

// Input: prices = [1]
// Output: 0
 

// Constraints:

// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000


var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    const n = prices.length;
    const hold = Array(n).fill(0);
    const sold = Array(n).fill(0);
    const rest = Array(n).fill(0);
    hold[0] = -prices[0];
    sold[0] = 0;
    rest[0] = 0;
    for (let i = 1; i < n; i++) {
        hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i]);
        sold[i] = hold[i - 1] + prices[i];
        rest[i] = Math.max(rest[i - 1], sold[i - 1]);
    }
    return Math.max(sold[n - 1], rest[n - 1]);
};