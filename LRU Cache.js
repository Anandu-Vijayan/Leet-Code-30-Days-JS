// 146. LRU Cache
// Solved
// Medium
// Topics
// Companies
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.


class MyNode {
    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.dllHead = new MyNode(-1, -1);
    this.dllTail = new MyNode(-1, -1);
    this.dllHead.next = this.dllTail;
    this.dllTail.prev = this.dllHead;
    // stores nodes in dll for fast lookup
    this.map = new Map();
    this.size = 0;
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // Lookup in constant time - use a hashMap
    // Move to the front
    // console.log("accessing", key);
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this.removeNode(node);

    this.addNodeToFront(node);

    // console.log("found", key);
    return node.val;
};

LRUCache.prototype.addNodeToFront = function (node) {
    const prev = this.dllHead;
    const next = this.dllHead.next;

    node.prev = prev;
    node.next = next;
    next.prev = node;
    prev.next = node;
}

LRUCache.prototype.removeNode = function (node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // console.log("putting", key, value, { size: this.size });
    let node;
    if (this.map.has(key)) {
        // console.log("updating", key)
        node = this.map.get(key);
        node.val = value;
        this.removeNode(node);
    } else {
        if (this.size === this.capacity) {
            const lastNode = this.dllTail.prev;
            // console.log("size exceeded, removing", lastNode.key);
            this.map.delete(lastNode.key);
            this.removeNode(lastNode);
            this.size--;
        }

        // console.log("adding", key)
        node = new MyNode(key, value);
        this.map.set(key, node);
        this.size++;
    }

    this.addNodeToFront(node);
};



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
