document.getElementById('processButton').addEventListener('click', function () {
    let numberA = parseInt(document.getElementById('numberA').value);
    let numberB = parseInt(document.getElementById('numberB').value);
    let resultElement = document.getElementById('result');

    if (isNaN(numberA) || isNaN(numberB)) {
        resultElement.innerText = "Пожалуйста, введите оба числа.";
        return;
    }

    if (numberA !== numberB) {
        let maxValue = Math.max(numberA, numberB);
        numberA = maxValue;
        numberB = maxValue;
    } else {
        numberA = 0;
        numberB = 0;
    }

    resultElement.innerText = `Новые значения: A = ${numberA}, B = ${numberB}`;
});

