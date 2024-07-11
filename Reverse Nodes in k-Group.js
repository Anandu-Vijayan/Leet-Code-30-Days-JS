// 25. Reverse Nodes in k-Group
// Solved
// Hard
// Topics
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

class countList {
    constructor() {
        this.counting = 0;
        this.tempRef = null;
    }
    count(list) {
        this.tempRef = list;
        while (this.tempRef) {
            this.counting += 1;
            this.tempRef = this.tempRef.next;
        }
        return this.counting;
    }
}

class reverseList {
    constructor() {
        this.newList = null;
    }
    reverse(head, prev) {
        let next = null;

        while (head !== null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}

class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}

function cutSubNodesAsPerTheSizeGiven(head, size, cutSubNodes = new Node()) {
    function cutSubNodesAsPerTheSizeGivenHelper(head, HelperSize, cutSubNodes) {
        if (head == null || HelperSize === 0) {
            return head;
        }
        const save = head;
        head = head.next;
        save.next = null;
        cutSubNodes.next = save;
        return cutSubNodesAsPerTheSizeGivenHelper(head, (HelperSize -= 1), cutSubNodes.next);
    }
    const leftHead = cutSubNodesAsPerTheSizeGivenHelper(head, size, cutSubNodes);
    return { cutSubNodes: cutSubNodes.next, leftHead };
}

var reverseKGroup = function(head, size) {
    const totalNode = new countList().count(head);
    const lastNodesToBeSkipped = totalNode % size;
    function splitNodesAsPerSize(head, size, nodesExplored = 0) {
        if (totalNode - lastNodesToBeSkipped === nodesExplored) {
            return head;
        }
        const { cutSubNodes, leftHead } = cutSubNodesAsPerTheSizeGiven(head, size);
        const response = splitNodesAsPerSize(leftHead, size, (nodesExplored += size));
        return new reverseList().reverse(cutSubNodes, response);
    }
    return splitNodesAsPerSize(head, size);
};