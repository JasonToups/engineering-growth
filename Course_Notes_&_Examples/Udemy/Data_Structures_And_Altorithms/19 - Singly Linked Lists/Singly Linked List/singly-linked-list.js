/* 
Singly Linked List



*/

// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// manual example of creating nodes

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // this push function should accept a value, and add that value as a Node to the Linked List.
  push(val){
    // Create a new node using the value passed to the function
    let newNode = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node.
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment the length by one
    this.length++;
    // return the linked list
    return this;
  }

  // We need to write a function that moves through the list to find the end.
  traverse(){
    let current = this.head;
    while(current){
      console.log(current.val);
      current = current.next;
    }
    return current;
  }

  
  // This pop function will remove the last Node.
  pop() {
    // If there are no nodes in the list, return undefined
    if (!list.length) return undefined;
    let current = this.head;
    // newTail lags behind current to keep track of the previous Node.
    let newTail = current;
    
    // Loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Set the new tail of the list.
    this.tail = newTail;
    // Set the next property of the 2nd to last node to be null
    this.tail.next = null;
    // Decrement the length of the list by 1
    this.length--;

    // This safeguards against popping Nodes to the point where the list length is 0.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return the value of the node removed
    return current;
  }
  
  // Shift in a linked list is very efficient, since it's performed in real time, as opposed to an array, where each index needs to be reassigned when an element of the array is removed.
  // Removes the first element from the Linked List.
  shift() {
    // if there are no nodes, return undefined
    if (!list.length) return undefined;
    // store the current head property in a variable
    let currentHead = this.head
    // set the head property to be the current head's next property
    this.head = currentHead.next
    // decrement the length by 1
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    // return the value of the node removed.
    return currentHead
  }
  // adds to the beginning of the Linked List
  unshift(val) {
    // create a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }   
    // otherwise set the newly created node's next property to be the current head property on the list
    newNode.next = this.head;
    // set the head property on the list to be that newly created node
    this.head = newNode;
    // increment the length of the list by 1
    this.length++;
    // return the linked list
    return this;
  
  }
}



var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")