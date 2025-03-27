function calculateFunction(x, a, b) {
    let result = null; 
    let message = ""; 

    if (x > -2 && x < 10) {
        if (b * x + 3 < 0) {
            console.log("Помилка: підкореневий вираз від’ємний");
            return;
        }
        result = Math.sqrt(b * x + 3);
        message = "Обчислено за формулою √(bx + 3)";
    } 
    
    if (x === 10) {
        result = Math.abs(x * x - a * x + 7);
        message = "Обчислено за формулою |x² - ax + 7|";
    } 
    
    if (x > 10) {
        result = Math.cos(x - 1);
        message = "Обчислено за формулою cos(x - 1)";
    }

    if (result !== null) { 
        console.log(message);
        console.log("f(x) =", result);
    } else {
        console.log("Помилка: x не входить у визначений діапазон");
    }
}
calculateFunction(5, 2, 1);  // x ∈ (-2,10), b = 1 → √(1*5 + 3) = √8

calculateFunction(10, 3, 2); // x = 10 → |10² - 3*10 + 7| = |100 - 30 + 7| = |77|

calculateFunction(15, 2, 2); // x > 10 → cos(15 - 1) = cos(14)

calculateFunction(-3, 2, 1); // b * (-3) + 3 = -3 + 3 = 0 (√0 - нормально), але якщо b = -2, буде помилка

calculateFunction(-5, 2, 1); // x < -2 → вихід за межі області визначення
