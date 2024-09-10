// 92. Reverse Linked List II
// Solved
// Medium
// Topics
// Companies
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let rightNode = null;
    function reverseList(head, idx) {
        if(!head || !head.next){
            return head;
        }
        if(idx === right) {
            rightNode = head.next;
            head.next = null;
            return head;
        }
        let temp = head.next;
        let h1 = reverseList(head.next, idx+1);
        head.next = null;
        temp.next = head;
        return h1;
    }
    let prev = null;
    let idx = 1;
    let h = head;
    while(h) {
        if(idx === left){
            x = prev;
            break;
        }
        prev = h;
        h = h.next;
        idx++;
    }
    let reverseHead = reverseList(h, idx);
    h.next = rightNode;
    if(x === null){
        return reverseHead;
    }
    x.next = reverseHead;
    return head;
};