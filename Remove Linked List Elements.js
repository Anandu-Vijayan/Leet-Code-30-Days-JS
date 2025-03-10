// 203. Remove Linked List Elements
// Solved
// Easy
// Topics
// Companies
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50


var removeElements = function (head, val) {
    let prev = null
    let curr = head

    while (curr !== null) {
        if (curr.val === val) {
        // EDGE CASE: if first node is the one that need to be removed then make the next node as head.
            if (prev === null) {
                head = curr.next
                curr = curr.next
            }
            else {
                curr = curr.next
                prev.next = curr
            }
        }
        else{
            prev = curr
            curr = curr.next
        }
    }
    return head
};