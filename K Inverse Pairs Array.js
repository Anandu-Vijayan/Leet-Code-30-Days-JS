// 629. K Inverse Pairs Array
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j].

// Given two integers n and k, return the number of different arrays consisting of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7.

 

// Example 1:

// Input: n = 3, k = 0
// Output: 1
// Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.
// Example 2:

// Input: n = 3, k = 1
// Output: 2
// Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
 

// Constraints:

// 1 <= n <= 1000
// 0 <= k <= 1000

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const mod = 1000000007;
    
    // Initialize a 1D array dp to store intermediate results
    const dp = new Array(k + 1).fill(0);

    // Base case initialization
    dp[0] = 1;

    // Dynamic Programming calculation
    for (let i = 1; i <= n; i++) {
        // Use prefix sum to efficiently calculate the running sum
        const prefixSum = [0];
        let total = 0;

        for (let j = 0; j <= k; j++) {
            total = (total + dp[j]) % mod;
            prefixSum.push(total);
        }

        // Update dp array based on the prefix sum
        for (let j = 0; j <= k; j++) {
            const upper = Math.max(0, j - i + 1);
            const lower = Math.min(j + 1, k + 1);
            const rangeSum = (prefixSum[lower] - prefixSum[upper] + mod) % mod;
            dp[j] = rangeSum;
        }
    }

    // Return the result
    return dp[k];
};