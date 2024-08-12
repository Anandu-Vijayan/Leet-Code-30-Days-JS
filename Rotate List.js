// 61. Rotate List
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109


var rotateRight = function (head, k) {
    let n = length(head)

    if (k % n === 0 || !head) return head

    let node = head
    k = n > k ? k : k % n

    while (n - k - 1) {
        node = node.next
        k++
    }
    res = tail = node.next

    node.next = null
    while (tail.next) {
        tail = tail.next
    }
    tail.next = head
    return res
};

var length = function (node) {
    let n = 0;

    while (node) {
        node = node.next
        n++
    }

    return n
}