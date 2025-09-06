// 483. Smallest Good Base
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given an integer n represented as a string, return the smallest good base of n.

// We call k >= 2 a good base of n, if all digits of n base k are 1's.

 

// Example 1:

// Input: n = "13"
// Output: "3"
// Explanation: 13 base 3 is 111.
// Example 2:

// Input: n = "4681"
// Output: "8"
// Explanation: 4681 base 8 is 11111.
// Example 3:

// Input: n = "1000000000000000000"
// Output: "999999999999999999"
// Explanation: 1000000000000000000 base 999999999999999999 is 11.
 

// Constraints:

// n is an integer in the range [3, 1018].
// n does not contain any leading zeros.



var smallestGoodBase = function (n) {
    n = BigInt(n);
    let compute = (base, len) => (base ** BigInt(len) - 1n) / (base - 1n);
    for (let len = BigInt(Math.floor(Math.log2(Number(n))) + 1); len >= 2n; len--) {
        let low = 2n, high = n;
        while (low <= high) {
            let mid = (low + high) / 2n;
            let sum = compute(mid, len);

            if (sum === n) {
                return mid.toString();
            } else if (sum < n) {
                low = mid + 1n;
            } else {
                high = mid - 1n;
            }
        }
    }
    return (n - 1n).toString();
};