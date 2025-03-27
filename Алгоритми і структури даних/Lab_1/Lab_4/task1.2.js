function calculateFunction(x, a, b) {
    let result = null;
    let message = "";

    if (x > -2) { 
        if (x < 10) {
            if (b * x + 3 < 0) {
                console.log("Помилка: підкореневий вираз від’ємний");
                return;
            }
            result = Math.sqrt(b * x + 3);
            message = "Обчислено за формулою √(bx + 3)";
        } else if (x === 10) {
            result = Math.abs(x * x - a * x + 7);
            message = "Обчислено за формулою |x² - ax + 7|";
        } else {
            result = Math.cos(x - 1);
            message = "Обчислено за формулою cos(x - 1)";
        }
    } else {
        console.log("Помилка: x не входить у визначений діапазон");
        return;
    }

    console.log(message);
    console.log("f(x) =", result);
}
calculateFunction(5, 2, 1);

calculateFunction(10, 3, 2);

calculateFunction(15, 2, 2);

calculateFunction(-3, 2, -2);

calculateFunction(-5, 2, 1);
