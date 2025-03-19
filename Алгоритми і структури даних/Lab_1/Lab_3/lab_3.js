/*
Виконання за допомогою готових методів та ф-ій js 

function reverseString(str) {
    return str.split('').reverse().join('');
}
const originalString = 'Victoria';
const reversedString = reverseString(originalString);
console.log('Оригінальний рядок:', originalString);
console.log('Обернений рядок:', reversedString);
*/

// Виконання без використання готових методів та ф-ій js 

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const originalString = 'Victoria';
const reversedString = reverseString(originalString);
console.log('Оригінальний рядок:', originalString);
console.log('Обернений рядок:', reversedString);