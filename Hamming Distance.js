// 461. Hamming Distance
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1
 

// Constraints:

// 0 <= x, y <= 231 - 1
 

// Note: This question is the same as 2220: Minimum Bit Flips to Convert Number.

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var hammingDistance = function(num1, num2) {
    let bin1 = num1.toString(2);
    let bin2 = num2.toString(2);

    // Pad shorter binary string with leading zeros
    while (bin1.length < bin2.length) {
        bin1 = '0' + bin1;
    }

    while (bin2.length < bin1.length) {
        bin2 = '0' + bin2;
    }

    // Count differing bits
    let differenceCount = 0;
    for (let i = 0; i < bin1.length; i++) {
        if (bin1[i] !== bin2[i]) {
            differenceCount++;
        }
    }

    return differenceCount;
};
