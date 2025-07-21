// 421. Maximum XOR of Two Numbers in an Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

 

// Example 1:

// Input: nums = [3,10,5,25,2,8]
// Output: 28
// Explanation: The maximum result is 5 XOR 25 = 28.
// Example 2:

// Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// Output: 127
 

// Constraints:

// 1 <= nums.length <= 2 * 105
// 0 <= nums[i] <= 231 - 1

function getBit(x, b) {
  return (x >> b) & 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = 0;

  let m = 0;
  let p = 0;
  let ll = 0;
  let rr = 0;
  let bsl = 0;
  let bsr = 0;
  let b = 0;

  for (let r = 0; r < n; r++) {
    m = (nums[r] + 1) >> 1;
    b = Math.ceil(Math.log2(nums[r] + 1));

    ll = 0;
    rr = r;

    while (nums[rr] != nums[ll]) {
      if (getBit(nums[rr], b) != getBit(nums[ll], b)) {
        p = ll;
        bsl = ll;
        bsr = rr;
        while (bsl <= bsr) {
          m = (bsl + bsr) >> 1;
          if (getBit(nums[m], b)) bsr = m - 1;
          else {
            bsl = m + 1;
            p = m;
          }
        }
        if (getBit(nums[r], b)) rr = p;
        else ll = p + 1;
      }

      b--;
    }

    res = Math.max(res, nums[r] ^ nums[rr]);
  }

  return res;
};
