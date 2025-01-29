// 147. Insertion Sort List
// Solved
// Medium
// Topics
// Companies
// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.


 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// -5000 <= Node.val <= 5000

const ListNode = function (val, next = null) {
    this.val = val
    this.next = next
}

const insertionSortList = head => {
    if (!head || !head.next) return head

    let values = []
    let temp = head
    while (temp) {
        values.push(temp.val)
        temp = temp.next
    }

    values.sort((a, b) => a - b)

    temp = head
    for (let i = 0; i < values.length; i++) {
        temp.val = values[i]
        temp = temp.next
    }

    return head
}

const createLinkedList = values => {
    if (!values.length) return null
    let head = new ListNode(values[0])
    let temp = head
    for (let i = 1; i < values.length; i++) {
        temp.next = new ListNode(values[i])
        temp = temp.next
    }
    return head
}

const printList = head => {
    let result = ''
    while (head) {
        result += head.val + ' -> '
        head = head.next
    }
    result += 'null'
    console.log(result)
}

const values = [4, 2, 1, 3]
const head = createLinkedList(values)

const sortedList = insertionSortList(head)
printList(sortedList)