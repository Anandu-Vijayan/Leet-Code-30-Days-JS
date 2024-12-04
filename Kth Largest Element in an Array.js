// 215. Kth Largest Element in an Array
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

function size(heap){
    return heap.length
}

function push(heap,index){
   
    let parent = Math.floor((index-1)/2)
    while(index>0 && heap[index]<heap[parent]){
        [heap[index],heap[parent]]=[heap[parent],heap[index]]
        index=parent
        parent=Math.floor((index-1)/2)
    }
}
 

function top(heap){
    return heap[0]
}
function pop(heap,size,i){
    let largest = i 
    let left =2*i+1
    let right = 2*i+2
    if(left<size && heap[left]<heap[largest]){
        largest=left
    }
    if(right<size && heap[right]<heap[largest]){
        largest = right
    }
    
    if(largest != i){
        [heap[largest],heap[i]]=[heap[i],heap[largest]]
        pop(heap,size,largest)
    }
}


var findKthLargest = function(arr, k) {

  let heap = []
    for(let i=0;i<k;i++){
        heap.push(arr[i])
        push(heap,heap.length-1)
    }
    // console.log(heap)
    for(let i=k;i<arr.length;i++){
        if(arr[i]>top(heap)){
            
            heap[0]=heap[heap.length-1]
            heap.pop()
            pop(heap,heap.length,0)
            
            heap.push(arr[i])
            push(heap,heap.length-1)
        }
        
    }
    return heap[0]

};