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
    } else {
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

  // returns a Node at a specific index
  // function accepts an index
  get(index) {
    // if the index is less than 0 or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) {
      return null
    }
    // loop through the list until you reach the index and return the node at that specific index
    let current = this.head;
    // counter will be your index in the Linked List
    let counter = 0;
    while(counter <= index) {
      current = current.next
      counter++;
      // placing this logic here isn't necessary, but it is semantic and satisfies the "=" logic in the while loop.
      if (counter === index) {
        return current;
      }
    }
  }
  // this function should accept a value & an index, and update the value at that index.
  set(index, val) {
    // use the get function to find the specific node.
    let foundNode = this.get(index);
    if (foundNode){
      // if the node is found, set the value of that node to be the value passed to the function & return true.
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // this function should accept a value & an index, and will add a new Node at the index.
  insert(index, val) {
    // if the index is less than 0 or greater than the length, return false
    if (index < 0 || index > this.length) return false;
    // if the index is the same as the length, push a new Node to the end of the list
    // the !! transforms the return to a boolean
    if (index === this.length) return !! this.push(val)
    // if the index is 0, unshift a new Node to the start of the list
    if (index === 0) return !! this.unshift(val)
    // declare a variable for your new Node
    let newNode = new Node(val);
    // otherwise, using the get method, access the node at the index -1

    let previousNode = this.get(index -1);
    var previousNodeNext = previousNode.next;
    // set the next property on that Node to be the new Node
    previousNode.next = newNode;
    // set the property of the new Node to be the previous next.
    newNode.next = previousNodeNext;
    // increment the length
    this.length++;
    // return True
    return true;
  }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)