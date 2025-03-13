class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.value + ' ';
        current = current.next;
      }
      return result;
    }
    insertBeforePositive() {
      let current = this.head;
      while (current) {
        if (current.value > 0) {
          const newNode = new Node(2.5);
          newNode.next = current;
          newNode.prev = current.prev;
          if (current.prev) {
            current.prev.next = newNode;
          } else {
            this.head = newNode; 
          }
          current.prev = newNode;
        }
        current = current.next;
      }
    }
  }
  
  function main() {
    const list = new DoublyLinkedList();
    let inputData = [12, -3, 6, 0, -5];
    inputData.forEach(i => {
      list.add(i);  
    });
    console.log("Початковий список елементів: ", list.printList());
    list.insertBeforePositive();
    console.log("Список після вставки 2.5 перед додатними елементами: ", list.printList());
  }
  
  main();
  