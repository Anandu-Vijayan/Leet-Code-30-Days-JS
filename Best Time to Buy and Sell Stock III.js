// 123. Best Time to Buy and Sell Stock III
// Solved
// Hard
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete at most two transactions.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 105

var maxProfit = function(prices) {
    let maxReverse = 0;
    let minReverse = Infinity;
    let maxProfitReverse = 0;
    let maxProfitReverseArray = new Array(prices.length).fill(0);
    
    let max = 0;
    let min = Infinity;
    let maxProfit = 0;
    let maxTotalProfit = 0;
    
    //iterating backwards to fill up "maxProfitReverseArray" with right side profit for each index.
    for (let i = prices.length - 1; i >= 0; i--) {
        let currentPrice = prices[i];
        maxReverse = Math.max(maxReverse, currentPrice);
        maxProfitReverse = Math.max(maxProfitReverse, maxReverse - currentPrice);
        maxProfitReverseArray[i] = maxProfitReverse;
    }

    //iterating forwards to calculate max profit on the left side and then adding right side, returning maximum possible sum as answer.
    for (let k = 0; k < prices.length; k++) {
        let currentPrice = prices[k];
        min = Math.min(min, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - min);
        maxTotalProfit = Math.max(maxTotalProfit, maxProfit + maxProfitReverseArray[k]);
    }

    return maxTotalProfit;
};