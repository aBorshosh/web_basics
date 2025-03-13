    class Node {
        constructor(value) {
        this.value = value;
        this.next = null;
        }
    }
    class LinkedList {
        constructor() {
        this.head = null;
        }
        add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
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
        removeFirstEvenOnOddPosition() {
        let current = this.head;
        let previous = null;
        let position = 1; 
        while (current) {
            if (position % 2 !== 0 && current.value % 2 === 0) {
            if (previous === null) {
                this.head = current.next; 
            } else {
                previous.next = current.next;
            }
            return; 
            }
            previous = current;
            current = current.next;
            position++;
        }
        }
    }
    function main() {
        const list = new LinkedList();
        let inputData = [13, 15, 10, 18, -7, -4, 20];
        inputData.forEach(i => {
        list.add(i);  
        });
        console.log("Початковий список елементів: ", list.printList());
        list.removeFirstEvenOnOddPosition();
        console.log("Список після видалення першого парного елемента на непарній позиції: ", list.printList());
    }
    
    main();
    