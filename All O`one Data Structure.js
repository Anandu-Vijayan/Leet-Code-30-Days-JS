// 432. All O`one Data Structure
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

// Implement the AllOne class:

// AllOne() Initializes the object of the data structure.
// inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
// dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
// getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
// getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
// Note that each function must run in O(1) average time complexity.

 

// Example 1:

// Input
// ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
// [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
// Output
// [null, null, null, "hello", "hello", null, "hello", "leet"]

// Explanation
// AllOne allOne = new AllOne();
// allOne.inc("hello");
// allOne.inc("hello");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "hello"
// allOne.inc("leet");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "leet"
 

// Constraints:

// 1 <= key.length <= 10
// key consists of lowercase English letters.
// It is guaranteed that for each call to dec, key is existing in the data structure.
// At most 5 * 104 calls will be made to inc, dec, getMaxKey, and getMinKey.



var AllOne = function () {
    this.map = new Map();
    this.min = new PriorityQueue((a, b) => a[0] - b[0]);
    this.max = new PriorityQueue((a, b) => b[0] - a[0]);
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    if (!this.map.has(key)) this.map.set(key, 0);
    const count = this.map.set(key, this.map.get(key) + 1).get(key);
    this.min.push([count, key]);
    this.max.push([count, key]);
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    const count = this.map.set(key, this.map.get(key) - 1).get(key);
    if (count === 0) this.map.delete(key);
    else {
        this.min.push([count, key]);
        this.max.push([count, key]);
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    if (this.map.size === 0) return "";

    while (!this.max.isEmpty()) {
        const [count, key] = this.max.front();
        if (this.map.has(key) && this.map.get(key) === count) return key;
        this.max.pop();
    }

    return "";
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    if (this.map.size === 0) return "";

    while (!this.min.isEmpty()) {
        const [count, key] = this.min.front();
        if (this.map.has(key) && this.map.get(key) === count) return key;
        this.min.pop();
    }

    return "";
};