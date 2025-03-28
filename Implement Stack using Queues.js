// 225. Implement Stack using Queues
// Solved
// Easy
// Topics
// Companies
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
 

// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and top are valid.
 

// Follow-up: Can you implement the stack using only one queue?



var MyStack = function () {
    this.q1 = []; // main queue
    this.q2 = []; // secondary queue / temp queue.
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.empty()) return null;

    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
    }

    let poppedItem = this.q1.shift();
    [this.q1, this.q2] = [this.q2, this.q1];
    return poppedItem;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.empty()) return null;

    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
    }
    let top = this.q1[0];
    this.q2.push(this.q1.shift());
    [this.q1, this.q2] = [this.q2, this.q1];
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */