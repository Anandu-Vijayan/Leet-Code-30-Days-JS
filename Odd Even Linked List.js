// 328. Odd Even Linked List
// Solved
// Medium
// Topics
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106



var oddEvenList = function(head) {
    if(head == null || head.next == null || head.next.next == null){
        return head;
    }
    let odd = new ListNode(head.val);
    let even = new ListNode(head.next.val);
    let oddPtr = odd;
    let evenPtr = even;
    let ptr = head.next.next;
    let count = 2;
    while(ptr != null){
        count++;
        if(count % 2 == 0){
            let n = new ListNode(ptr.val);
            evenPtr.next = n;
            evenPtr = evenPtr.next;
        }
        else{
            let n = new ListNode(ptr.val);
            oddPtr.next = n;
            oddPtr = oddPtr.next;
        }
        if(ptr.next == null){
            oddPtr.next = even;
        }
        ptr = ptr.next;
    }
    return odd;
};