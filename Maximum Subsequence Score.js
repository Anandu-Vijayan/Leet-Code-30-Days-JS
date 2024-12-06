// 2542. Maximum Subsequence Score
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

// For chosen indices i0, i1, ..., ik - 1, your score is defined as:

// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
// Return the maximum possible score.

// A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

 

// Example 1:

// Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
// Output: 12
// Explanation: 
// The four possible subsequence scores are:
// - We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
// - We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
// - We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
// - We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
// Therefore, we return the max score, which is 12.
// Example 2:

// Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
// Output: 30
// Explanation: 
// Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
 

// Constraints:

// n == nums1.length == nums2.length
// 1 <= n <= 105
// 0 <= nums1[i], nums2[j] <= 105
// 1 <= k <= n


var maxScore = function(nums1, nums2, k) {
    let res = 0,
    prefixSum = 0,
    minHeap = new MinHeap();

  const s = nums1
    .map((i, idx) => [i, nums2[idx]])
    .sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < s.length; i++) {
    const [num1, num2] = s[i];
    prefixSum += num1;
    minHeap.push(num1);

    if (minHeap.size() === k) {
      const x = prefixSum * num2;
      res = Math.max(res, x);
      prefixSum -= minHeap.pop();
    }
  }

  return res;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    while (this.leftChild(i) < this.size()) {
      let minChild = this.leftChild(i);
      if (
        this.rightChild(i) < this.size() &&
        this.heap[this.rightChild(i)] < this.heap[minChild]
      ) {
        minChild = this.rightChild(i);
      }
      if (this.heap[i] <= this.heap[minChild]) {
        break;
      }
      this.swap(i, minChild);
      i = minChild;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
}