// 460. LFU Cache
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[4,3], cnt(4)=2, cnt(3)=3
 

// Constraints:

// 1 <= capacity <= 104
// 0 <= key <= 105
// 0 <= value <= 109
// At most 2 * 105 calls will be made to get and put.
 


class LNode {
    key: number;
    value: number;
    frequency: number;
    prev: LNode | null = null;
    next: LNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.frequency = 1;
    }
}

class DoublyLinkedList {
    head: LNode;
    tail: LNode;

    constructor() {
        this.head = new LNode(0, 0);
        this.tail = new LNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode(node: LNode): void {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    removeNode(node: LNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    popTail(): LNode | null {
        if (this.tail.prev === this.head) return null;
        const node = this.tail.prev!;
        this.removeNode(node);
        return node;
    }

    isEmpty(): boolean {
        return this.head.next === this.tail;
    }
}

class LFUCache {
    capacity: number;
    size: number = 0;
    minf: number = 0;
    cache: Map<number, LNode> = new Map();
    frequencyList: Map<number, DoublyLinkedList> = new Map();

    constructor(capacity: number) {
        this.capacity = capacity;
        this.frequencyList.set(1, new DoublyLinkedList());
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key)!;
        this.updateFrequency(node);
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) return;

        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            node.value = value;
            this.updateFrequency(node);
        } else {
            if (this.size === this.capacity) {
                const minList = this.frequencyList.get(this.minf)!;
                const nodeToEvict = minList.popTail()!;
                this.cache.delete(nodeToEvict.key);
                this.size--;
            }

            const newNode = new LNode(key, value);
            this.cache.set(key, newNode);

            if (!this.frequencyList.has(1)) {
                this.frequencyList.set(1, new DoublyLinkedList());
            }

            this.frequencyList.get(1)!.addNode(newNode);

            this.minf = 1;
            this.size += 1;
        }
    }

    private updateFrequency(node: LNode): void {
        const oldFrequency = node.frequency;
        const oldList = this.frequencyList.get(oldFrequency)!;
        oldList.removeNode(node);

        if (oldList.isEmpty()) {
            this.frequencyList.delete(oldFrequency);
            if (this.minf === oldFrequency) {
                this.minf += 1;
            }
        }

        node.frequency += 1;

        if (!this.frequencyList.has(node.frequency)) {
            this.frequencyList.set(node.frequency, new DoublyLinkedList());
        }

        this.frequencyList.get(node.frequency)!.addNode(node);
    }
}