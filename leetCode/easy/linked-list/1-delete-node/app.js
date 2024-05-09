/* 
Delete Node in a Linked List

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

Constraints:

The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000

The value of each node in the list is unique.

The node to be deleted is in the list and is not a tail node


Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

Links:
https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/


*/

/* 
Inputs:


Outputs:


Test Cases:


Edge Cases:


PLAN:

*/

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(4);
let node2 = new ListNode(5);
node1.next = node2;
let node3 = new ListNode(1);
node2.next = node3;
let node4 = new ListNode(9);
node3.next = node4;

let list = new LinkedList(node1);

console.log(list)
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

 var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


/* TESTS */
let nodeVal = 5;
console.log(deleteNode(nodeVal));
