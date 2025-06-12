// 373. Find K Pairs with Smallest Sums
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// -109 <= nums1[i], nums2[i] <= 109
// nums1 and nums2 both are sorted in non-decreasing order.
// 1 <= k <= 104
// k <= nums1.length * nums2.length

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(pair) {
    this.heap.push(pair);
    this._bubbleUp();
  }

  pop() {
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this._sinkDown();
    }
    return top;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx][0] <= this.heap[idx][0]) break;
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      idx = parentIdx;
    }
  }

  _sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx][0] < element[0]) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          this.heap[rightIdx][0] < (swap === null ? element[0] : this.heap[leftIdx][0])
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  const minHeap = new MinHeap();

  if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

  // Push first k pairs with nums1[0...k-1] and nums2[0]
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    minHeap.push([nums1[i] + nums2[0], i, 0]); // [sum, index in nums1, index in nums2]
  }

  while (k > 0 && minHeap.size() > 0) {
    const [sum, i, j] = minHeap.pop();
    result.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length) {
      minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
    }
    k--;
  }

  return result;
};
