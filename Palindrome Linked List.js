// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// Companies
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?


var isPalindrome = function(head) {
    let fast = head, slow = head,reverse = null,prev, mid;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
        prev.next = reverse;
        reverse = prev;
    }
    mid = prev;
    if(fast != null){
        slow = slow.next;
    }
    while(slow != null){
        if(slow.val != mid.val){
            return false;
        }
        slow = slow.next;
        mid = mid.next;
    }
    return true;
};