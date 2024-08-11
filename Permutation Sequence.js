// 60. Permutation Sequence
// Solved
// Hard
// Topics
// Companies
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

 

// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"
// Example 3:

// Input: n = 3, k = 1
// Output: "123"
 

// Constraints:

// 1 <= n <= 9
// 1 <= k <= n!


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

const returnFactorial = (num) => {
    const tempArray = Array.from({length : num}).map((num, i) => i + 1);
    return tempArray.reduce((a,b) => a*b, 1);
}
const getPermutation = (n, k) => {
    numArr = Array.from({length : n}).map((n, i) => i + 1);
    resultArr = [];
    while (k) {
        let nFactorial = returnFactorial(n);
        if ((k % (nFactorial / n)) === 0) {
            firstNumIndex = (k / (nFactorial /n)) - 1;
        } else {
            firstNumIndex = Math.floor(k / (nFactorial /n));
        }
        resultArr.push(numArr[firstNumIndex]);
        numArr.splice(numArr.indexOf(numArr[firstNumIndex]), 1);
        k = k % (nFactorial / n);
        n--;
    }
    numArr.sort((a,b) => a - b).reverse();
    return resultArr.concat(numArr).join("");
};