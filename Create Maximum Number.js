// 321. Create Maximum Number
// Solved
// Hard
// Topics
// Companies
// You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. You are also given an integer k.

// Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved.

// Return an array of the k digits representing the answer.

 

// Example 1:

// Input: nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
// Output: [9,8,6,5,3]
// Example 2:

// Input: nums1 = [6,7], nums2 = [6,0,4], k = 5
// Output: [6,7,6,0,4]
// Example 3:

// Input: nums1 = [3,9], nums2 = [8,9], k = 3
// Output: [9,8,9]
 

// Constraints:

// m == nums1.length
// n == nums2.length
// 1 <= m, n <= 500
// 0 <= nums1[i], nums2[i] <= 9
// 1 <= k <= m + n
// nums1 and nums2 do not have leading zeros.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    let result = Array(k).fill(0);
    let candidate = Array(k).fill(0);
    const part1 = Array(k + 1).fill(0);
    const part2 = Array(k + 1).fill(0);
  
    /**
     * @param {number[]} source
     * @param {number[]} target
     * @param {number} k
     */
    function pickPart(source, target, k) {
      let rm = source.length - k;
      let j = 0;
  
      for (let i = 0; i < source.length; i++) {
        while (rm && j && source[i] > target[j - 1]) {
          rm--;
          j--;
        }
        target[j++] = source[i];
      }
  
      target[k] = -1;
      return target;
    }
  
    const lowerL = Math.max(0, k - n2);
    const upperL = Math.min(n1, k);
    let l2, opt;
  
    function merge() {
      let i1 = 0;
      let i2 = 0;
      let flagOpt = false;
  
      for (let i = 0; i < k; i++) {
        let r1 = i1;
        let r2 = i2;
        while (part1[r1] === part2[r2] && part1[r1] !== -1) {
          r1++;
          r2++;
        }
        if (part1[r1] > part2[r2]) {
          candidate[i] = part1[i1++];
        } else {
          candidate[i] = part2[i2++];
        }
        if (!flagOpt) {
          if (candidate[i] > result[i]) flagOpt = true;
          else if (candidate[i] < result[i]) return false;
        }
      }
  
      return flagOpt;
    }
  
    for (let l1 = lowerL; l1 <= upperL; l1++) {
      l2 = k - l1;
      pickPart(nums1, part1, l1);
      pickPart(nums2, part2, l2);
      opt = merge(l1, l2);
      if (opt) [result, candidate] = [candidate, result];
    }
  
    return result;
  };