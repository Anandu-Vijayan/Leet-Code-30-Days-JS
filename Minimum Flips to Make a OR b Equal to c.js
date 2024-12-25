// 1318. Minimum Flips to Make a OR b Equal to c
// Solved
// Medium
// Topics
// Companies
// Hint
// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 

// Example 1:



// Input: a = 2, b = 6, c = 5
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
// Example 2:

// Input: a = 4, b = 2, c = 7
// Output: 1
// Example 3:

// Input: a = 1, b = 2, c = 3
// Output: 0
 

// Constraints:

// 1 <= a <= 10^9
// 1 <= b <= 10^9
// 1 <= c <= 10^9


/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function minFlips(a, b, c) {
    // Keep track of flips needed
    let flips = 0;
    
    // Compare bits until all numbers become 0
    while (a > 0 || b > 0 || c > 0) {
        // Get rightmost bits
        let bitA = a & 1;
        let bitB = b & 1;
        let bitC = c & 1;
        
        // If OR of a,b should equal c but doesn't
        if ((bitA | bitB) !== bitC) {
            if (bitC === 0) {
                // Need to flip both 1s to 0s
                flips += (bitA + bitB);
            } else {
                // Need to flip one 0 to 1
                flips += 1;
            }
        }
        
        // Right shift to check next bits
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    
    return flips;
  }