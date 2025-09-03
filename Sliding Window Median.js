// 480. Sliding Window Median
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

// For examples, if arr = [2,3,4], the median is 3.
// For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
// You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
// Explanation: 
// Window position                Median
// ---------------                -----
// [1  3  -1] -3  5  3  6  7        1
//  1 [3  -1  -3] 5  3  6  7       -1
//  1  3 [-1  -3  5] 3  6  7       -1
//  1  3  -1 [-3  5  3] 6  7        3
//  1  3  -1  -3 [5  3  6] 7        5
//  1  3  -1  -3  5 [3  6  7]       6
// Example 2:

// Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
// Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    const result = [];
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();
    const hashTable = new Map(); // To track elements to be removed
    
    // Initialize the first window
    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i]);
    }
    
    // Balance the heaps: maxHeap can have at most one more than minHeap
    for (let i = 0; i < Math.floor(k / 2); i++) {
        minHeap.push(maxHeap.pop());
    }
    
    for (let i = k; i <= nums.length; i++) {
        // Calculate median
        if (k % 2 === 1) {
            result.push(maxHeap.peek());
        } else {
            result.push((maxHeap.peek() + minHeap.peek()) / 2);
        }
        
        if (i === nums.length) break;
        
        const outgoingNum = nums[i - k];
        const incomingNum = nums[i];
        
        // Determine which heap the outgoing number is in
        let balance = 0; // keeps track of heap size differences
        
        // Remove outgoing number
        if (outgoingNum <= maxHeap.peek()) {
            balance--;
        } else {
            balance++;
        }
        
        // Add to hash table for lazy removal
        hashTable.set(outgoingNum, (hashTable.get(outgoingNum) || 0) + 1);
        
        // Add incoming number
        if (incomingNum <= maxHeap.peek()) {
            maxHeap.push(incomingNum);
            balance++;
        } else {
            minHeap.push(incomingNum);
            balance--;
        }
        
        // Rebalance heaps
        if (balance > 0) {
            minHeap.push(maxHeap.pop());
        } else if (balance < 0) {
            maxHeap.push(minHeap.pop());
        }
        
        // Remove elements marked for deletion if they're at the top
        while (maxHeap.size() > 0 && hashTable.get(maxHeap.peek()) > 0) {
            const num = maxHeap.pop();
            hashTable.set(num, hashTable.get(num) - 1);
        }
        
        while (minHeap.size() > 0 && hashTable.get(minHeap.peek()) > 0) {
            const num = minHeap.pop();
            hashTable.set(num, hashTable.get(num) - 1);
        }
    }
    
    return result;
};

// Max Heap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return max;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp(idx) {
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (element <= parent) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }
    
    bubbleDown(idx) {
        const length = this.heap.length;
        const element = this.heap[idx];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

// Min Heap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp(idx) {
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }
    
    bubbleDown(idx) {
        const length = this.heap.length;
        const element = this.heap[idx];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}