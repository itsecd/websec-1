let history = [];

function addHistory() {
    let resultField = document.getElementById('result');
    for (let caculation of history) {
        let lableCaculation = document.createElement('lable');
        lableCaculation.style.marginLeft = '10px';
        lableCaculation.style.marginTop = '5px';
        lableCaculation.textContent = caculation;
        lableCaculation.style.fontSize = '20px';
        lableCaculation.style.fontFamily = "Math";
        lableCaculation.style.opacity = "0.5";
        resultField.appendChild(lableCaculation);
    }
}

function addNewElementHistory(newCalculation) {
    history.push(newCalculation);
}

function scrollToBottom() {
    var result = document.getElementById("result");
    result.scrollTop = result.scrollHeight;
}

function isNumeric(inputString) {
    return /^\d+$/.test(inputString);
}

function execute() {
    let result = document.getElementById('result');
    result.innerHTML = '';
    addHistory();
    try {
        if (!isNumeric(document.getElementById('first_argument').value) || !isNumeric(document.getElementById('second_argument').value))
            throw new Error("Invalid input");

        let firstArgument = parseInt(document.getElementById('first_argument').value);
        let secondArgument = parseInt(document.getElementById('second_argument').value);
        let operator = document.getElementById('operator');
        let string = '';

        if (operator.value == "addition") {
            string = `${firstArgument} + ${secondArgument} = ${firstArgument + secondArgument}`;
        }
        else if (operator.value == "subtraction") {
            string = `${firstArgument} - ${secondArgument} = ${firstArgument - secondArgument}`;
        }
        else if (operator.value == "multiplication") {
            string = `${firstArgument} * ${secondArgument} = ${firstArgument * secondArgument}`;
        }
        else if (operator.value == "division") {
            if (secondArgument == 0)
                throw new Error("Cannot be divided by 0");
            string = `${firstArgument} / ${secondArgument} = ${firstArgument / secondArgument}`;
        }

        let calculation = document.createElement('lable');
        calculation.style.marginLeft = '10px';
        calculation.style.marginTop = '5px';
        calculation.textContent = string;
        calculation.style.fontSize = '20px';
        calculation.style.fontFamily = "Math";
        result.appendChild(calculation);
        scrollToBottom();
        addNewElementHistory(string);
    }
    catch (ex) {
        alert(ex.message);
    }
}