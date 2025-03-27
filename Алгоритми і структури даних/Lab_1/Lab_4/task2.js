function calculateSequence(m) {
    if (m < 1 || !Number.isInteger(m)) {
        console.log("Помилка: m повинно бути цілим числом, яке більше або дорівнює 1");
        return;
    }

    for (let n = 1; n <= m; n++) {
        let xn = (Math.cos(2 * n - 5) + n) / (4 * n + 1);
        console.log(`x_${n} = ${xn}`);
    }
}
calculateSequence(5);

calculateSequence(0);

calculateSequence(2.5);
