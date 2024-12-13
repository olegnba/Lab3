document.getElementById('checkButton').addEventListener('click', function () {
    let numberA = parseInt(document.getElementById('numberA').value);
    let numberB = parseInt(document.getElementById('numberB').value);
    let resultElement = document.getElementById('result');

    if (isNaN(numberA) || isNaN(numberB)) {
        resultElement.innerText = "Пожалуйста, введите оба числа.";
        return;
    }

    if ((numberA % 2 === 0 && numberB % 2 === 0) || (numberA % 2 !== 0 && numberB % 2 !== 0)) {
        resultElement.innerText = "Числа A и B имеют одинаковую четность";
    } else {
        resultElement.innerText = "Числа A и B имеют разную четность";
    }
});