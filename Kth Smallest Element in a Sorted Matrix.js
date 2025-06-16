// 378. Kth Smallest Element in a Sorted Matrix
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

 

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2
 

// Follow up:

// Could you solve the problem with a constant memory (i.e., O(1) memory complexity)?
// Could you solve the problem in O(n) time complexity? The solution may be too advanced for an interview but you may find reading this paper fun.



var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] + 1; // +1 because we don't want to forget the last number
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0;i<matrix.length;i++) {
            for (let j=0;j<matrix.length;j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) lo = mid+1;
        else hi = mid;
    }
    return lo
};