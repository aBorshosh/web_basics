class Computer {
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    // Додавання нового комп'ютера у чергу
    enqueue(computer) {
        this.items.push(computer);
    }

    // Видалення першого елемента з черги
    dequeue() {
        if (this.isEmpty()) {
            return "Черга порожня";
        }
        return this.items.shift();
    }

    // Перевірка, чи є черга порожньою
    isEmpty() {
        return this.items.length === 0;
    }

    // Перегляд даних черги
    displayQueue() {
        console.log("Дані у черзі:");
        this.items.forEach((computer, index) => {
            console.log(`${index + 1}. Комп'ютер: ${computer.name}, RAM: ${computer.ram} GB`);
        });
    }

    // Обчислення загального обсягу оперативної пам'яті
    getTotalRAM() {
       /* let total = 0;
    this.items.forEach(computer => {
        total += computer.ram;
    });
    return total;
    */
        return this.items.reduce((total, computer) => total + computer.ram, 0);
    }
    // Очищення черги
    clear() {
    this.items = [];
    console.log("Черга очищена");
    }
}

function main() {
    // Створення черги
    const queue = new Queue();

    // Додавання нових комп'ютерів у чергу
    queue.enqueue(new Computer("Dell", 16));
    queue.enqueue(new Computer("HP", 8));
    queue.enqueue(new Computer("Lenovo", 12));
    queue.enqueue(new Computer("Asus", 32));
    queue.enqueue(new Computer("Acer", 4));

    // Перегляд даних черги перед видаленням
    console.log("Дані перед видаленням:");
    queue.displayQueue();

    // Видалення першого комп'ютера
    queue.dequeue();

    // Перегляд даних черги після видалення
    console.log("Дані після видалення:");
    queue.displayQueue();

    // Виведення загального обсягу оперативної пам'яті
    console.log(`Загальний обсяг RAM у черзі: ${queue.getTotalRAM()} GB`);
    
    //Очистка черги
    console.log("Дані після очистки:");
    queue.clear();
    queue.displayQueue(); 
}

main();

