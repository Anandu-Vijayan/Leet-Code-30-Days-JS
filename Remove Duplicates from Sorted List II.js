// 82. Remove Duplicates from Sorted List II
// Solved
// Medium
// Topics
// Companies
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummyNode = new ListNode(200);
  
     let prevNode = dummyNode;
      let node = head; let duplicate = false;
  
  while (node) {
      if (node.val === node.next?.val) { prevNode.next = null; duplicate = true; }
      
      else {
          if (!duplicate) {
              prevNode.next = node;
              prevNode = node
          }
        
          duplicate=false;
      }
            
      node = node.next
  }
      return dummyNode.next;
};