// 295. Find Median from Data Stream
// Solved
// Hard
// Topics
// Companies
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?



var MedianFinder = function() {
    this.minHeap = [] // for storing second half of sorted numbers
    this.maxHeap = [] // for storing first half of sorted numbers
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.length == 0) {
      this.maxHeap.push(num)
      return
    }

    if(this.minHeap.length == 0) {
      if(this.maxHeap[0] > num) {
        this.minHeap.push(this.maxHeap[0])
        this.maxHeap[0] = num
      } else {
        this.minHeap.push(num)
      }

      return
    }

    if(this.maxHeap[0] < num) { // add to min heap
      this.minHeap.push(num)

      let idx = this.minHeap.length - 1
      let parent = Math.floor(idx / 2)
      let heap = this.minHeap

      while(parent >= 0 && heap[parent] > heap[idx]) {
        let swap = heap[parent]
        heap[parent] = heap[idx]
        heap[idx] = swap

        idx = parent
        parent = Math.floor(idx / 2)
      }
    } else { // add to max heap
      this.maxHeap.push(num)

      let idx = this.maxHeap.length - 1
      let parent = Math.floor(idx / 2)
      let heap = this.maxHeap

      while(parent >= 0 && heap[parent] < heap[idx]) {
        let swap = heap[parent]
        heap[parent] = heap[idx]
        heap[idx] = swap

        idx = parent
        parent = Math.floor(idx / 2)
      }
    }

    const maxHeapLength = this.maxHeap.length
    const minHeapLength = this.minHeap.length

    const isEven = (maxHeapLength + minHeapLength) % 2
    if(maxHeapLength < minHeapLength) {
      if(isEven == 0) {
        while(this.maxHeap.length != this.minHeap.length) {
          // pick root from min, and add it to max
          let minRoot = this.minHeap[0]
          
          // heapify min heap
          this.minHeap[0] = this.minHeap[this.minHeap.length - 1]
          this.minHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.minHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] < heap[idx]
            || heap[r] < heap[idx]
          )) {
            let min = l
            if(heap[r] <  heap[l])
              min = r

            let swap = heap[idx]
            heap[idx] = heap[min]
            heap[min] = swap

            idx = min
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add min root to max heap
          this.maxHeap.push(minRoot)

          idx = this.maxHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.maxHeap
          while(parent >= 0 && heap[parent] < heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      } else {
        while(this.maxHeap.length <= this.minHeap.length) {
          // pick root from min, and add it to max
          let minRoot = this.minHeap[0]
          
          // heapify min heap
          this.minHeap[0] = this.minHeap[this.minHeap.length - 1]
          this.minHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.minHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] < heap[idx]
            || heap[r] < heap[idx]
          )) {
            let min = l
            if(heap[r] <  heap[l])
              min = r

            let swap = heap[idx]
            heap[idx] = heap[min]
            heap[min] = swap

            idx = min
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add min root to max heap
          this.maxHeap.push(minRoot)

          idx = this.maxHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.maxHeap
          while(parent >= 0 && heap[parent] < heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      }
    } else if(maxHeapLength - minHeapLength > 1) {
      if(isEven == 0) {
        while(this.maxHeap.length != this.minHeap.length) {
          // pick root from max, and add it to min
          let maxRoot = this.maxHeap[0]
          
          // heapify min heap
          this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1]
          this.maxHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.maxHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] > heap[idx]
            || heap[r] > heap[idx]
          )) {
            let max = l
            if(heap[r] > heap[l])
              max = r

            let swap = heap[idx]
            heap[idx] = heap[max]
            heap[max] = swap

            idx = max
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add max root to min heap
          this.minHeap.push(maxRoot)

          idx = this.minHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.minHeap
          while(parent >= 0 && heap[parent] > heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      } else {
        while(this.maxHeap.length - this.minHeap.length > 1) {
          // pick root from max, and add it to min
          let maxRoot = this.maxHeap[0]
          
          // heapify min heap
          this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1]
          this.maxHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.maxHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] > heap[idx]
            || heap[r] > heap[idx]
          )) {
            let max = l
            if(heap[r] > heap[l])
              max = r

            let swap = heap[idx]
            heap[idx] = heap[max]
            heap[max] = swap

            idx = max
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add max root to min heap
          this.minHeap.push(minRoot)

          idx = this.minHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.minHeap
          while(parent >= 0 && heap[parent] > heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const maxHeapLength = this.maxHeap.length
    const minHeapLength = this.minHeap.length

    const isEven = (maxHeapLength + minHeapLength) % 2

    if(isEven == 0) {
      return (this.minHeap[0] + this.maxHeap[0]) / 2
    }

    return this.maxHeap[0]
};