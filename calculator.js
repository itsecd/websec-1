const history = [];

function calculate() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");
    const historyElement = document.getElementById("history");

    const num1Value = num1Input.value;
    const num2Value = num2Input.value;
    const num1 = parseFloat(num1Value);
    const num2 = parseFloat(num2Value);


    if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
        resultElement.textContent = "Error: Input correct numbers.";
    } else {
        let result;
        let historyText = "";

        switch (operator) {
            case "+":
                result = num1 + num2;
                historyText = `${num1} + ${num2} = ${result}`;
                break;
            case "-":
                result = num1 - num2;
                historyText = `${num1} - ${num2} = ${result}`;
                break;
            case "*":
                result = num1 * num2;
                historyText = `${num1} * ${num2} = ${result}`;
                break;
            case "/":
                if (num2 === 0) {
                    resultElement.textContent = "Error: Division by zero.";
                    return;
                }
                result = num1 / num2;
                historyText = `${num1} / ${num2} = ${result}`;
                break;
            default:
                resultElement.textContent = "Error: Wrong operation.";
                return;
        }

        resultElement.textContent = result;
        history.unshift(historyText);

        if (history.length > 1) {
            history.pop();
        }

        updateHistoryDisplay(historyElement, history);
    }
}

function updateHistoryDisplay(element, history) {
    element.innerHTML = "";
    for (let i = 0; i < history.length; i++) {
        element.innerHTML += `<p class="history-item">${history[i]}</p>`;
    }
}

function validateInput(inputElement) {
    const inputValue = inputElement.value;
    const validValue = inputValue.replace(/,/g, '.');
    inputElement.value = validValue;
}