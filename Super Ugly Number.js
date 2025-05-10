// 313. Super Ugly Number
// Solved
// Medium
// Topics
// Companies
// A super ugly number is a positive integer whose prime factors are in the array primes.

// Given an integer n and an array of integers primes, return the nth super ugly number.

// The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

 

// Example 1:

// Input: n = 12, primes = [2,7,13,19]
// Output: 32
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].
// Example 2:

// Input: n = 1, primes = [2,3,5]
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].
 

// Constraints:

// 1 <= n <= 105
// 1 <= primes.length <= 100
// 2 <= primes[i] <= 1000
// primes[i] is guaranteed to be a prime number.
// All the values of primes are unique and sorted in ascending order.


var nthSuperUglyNumber = function(n, primes) {
    const dp = new Array(n); // Array to store super ugly numbers
    let len = primes.length; // Number of primes given
    let index = new Array(len).fill(0); // Array to track indices for each prime
    dp[0] = 1; // First super ugly number is 1
    
    // Loop to generate super ugly numbers
    for (let i = 1; i < n; i++) {
        let min = Number.MAX_SAFE_INTEGER; // Initialize minimum value
        
        // Find the next super ugly number by multiplying each prime with its corresponding number in dp
        for (let j = 0; j < len; j++) {
            min = Math.min(min, primes[j] * dp[index[j]]);
        }
        
        dp[i] = min; // Store the found super ugly number in dp
        
        // Update indices for primes whose product equals the found super ugly number
        for (let j = 0; j < primes.length; j++) {
            if (min == primes[j] * dp[index[j]]) {
                index[j]++;
            }
        }
    }
    
    return dp[n - 1]; // Return the nth super ugly number
};
