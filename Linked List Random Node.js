// 382. Linked List Random Node
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Implement the Solution class:

// Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
// int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.
 

// Example 1:


// Input
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 3, 2, 2, 3]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.getRandom(); // return 1
// solution.getRandom(); // return 3
// solution.getRandom(); // return 2
// solution.getRandom(); // return 2
// solution.getRandom(); // return 3
// // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
        this.range = [];
        while(head !== null) {
            this.range.push(head)
            head = head.next;
        }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    return this.range[Math.floor(Math.random() * this.range.length)].val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */