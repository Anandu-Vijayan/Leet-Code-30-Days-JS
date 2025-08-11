// 454. 4Sum II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 

// Example 1:

// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
// Example 2:

// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1
 

// Constraints:

// n == nums1.length
// n == nums2.length
// n == nums3.length
// n == nums4.length
// 1 <= n <= 200
// -228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
function fourSumCount(A, B, C, D) {
    const lists = [A, B, C, D];
    const k = lists.length;

    // สร้าง map สำหรับซีกซ้าย (A,B) และขวา (C,D)
    const left = sumCount(lists, 0, Math.floor(k / 2));
    const right = sumCount(lists, Math.floor(k / 2), k);

    let res = 0;
    // จับคู่ sum ฝั่งซ้ายกับ -sum ฝั่งขวา (รวม count ทุกแบบที่เจอ)
    for (const s of left.keys()) {
        res += left.get(s) * (right.get(-s) || 0);
    }
    return res;
}

// สร้าง map ของ sum -> count สำหรับการเลือกเลขในช่วง lists[start] ถึง lists[end-1]
function sumCount(lists, start, end) {
    let cnt = new Map();
    cnt.set(0, 1); // sum = 0 มี 1 แบบ (base case)
    for (let i = start; i < end; i++) {
        const map = new Map();
        for (const a of lists[i]) {
            for (const [total, c] of cnt.entries()) {
                const sum = total + a;
                map.set(sum, (map.get(sum) || 0) + c);
            }
        }
        cnt = map;
    }
    return cnt;
}