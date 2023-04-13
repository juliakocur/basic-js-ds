const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
constructor(value) {
  this.value = value;
  this.next = null;
}
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

getUnderlyingList() {
  return this.head;
  }

enqueue(value) {
  if (this.length === 0) { //пока нет элементов в очереди
      this.head = new Node(value);//создать очередь
  } else { // в другом случае
    let current = this.head; //актуальный элемент - это элемент который в голове
    while(current.next) {  // пока следующий элемент имеется
      current = current.next; // заменить актуальный на следующий
    }
      current.next = new Node(value);
    }
    this.length++;
  }

  dequeue() {
    let current = this.head.value; 
    this.head = this.head.next;
    this.length--;
    return current
  }
}

module.exports = {
  Queue
};

//const queue = new Queue();
//queue.enqueue(1); // adds the element to the queue
//console.log( queue.getUnderlyingList());
//queue.enqueue(3); // adds the element to the queue
//console.log( queue.getUnderlyingList());
//queue.dequeue(); // returns the top element from queue and deletes it, returns 1
//console.log( queue.getUnderlyingList());
//queue.getUnderlyingList() // returns { value: 3, next: null }
//console.log( queue.getUnderlyingList());