// 143. Reorder List
// Solved
// Medium
// Topics
// Companies
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

var reorderList = function(head) {
    const list = [];
    let curr = head;
    while (curr !== null) {
        list.push(curr.val);
        curr = curr.next;
    }

    curr = head;
    for (let i = 0; i < list.length; i++) {
        if (i % 2 === 0) {
            curr.val = list[Math.floor(i / 2)];
        } else {
            curr.val = list[list.length - Math.floor((i + 1) / 2)];
        }
        curr = curr.next;
    }
};