let previousExpression = "";

function calculate() {
    document.getElementById("outputOld").value = previousExpression;
    
    let firstValue = parseFloat(document.getElementById("firstValue").value);
    let secondValue = parseFloat(document.getElementById("secondValue").value)
    let operation = document.getElementById("operation").value;

    let result = NaN;

    switch(operation) {
        case "+":
            result = firstValue + secondValue;
            break;
        case "-": 
            result = firstValue - secondValue;
            break;
        case "*": 
            result = firstValue * secondValue;
            break;
        case "/": 
            result = firstValue / secondValue;
            break;
    }

    console.log(result);

    if (isNaN(result)) {
        document.getElementById("outputNew").value = "Некорректные данные";
    }
    else if (result === Infinity || result === -Infinity) {
        document.getElementById("outputNew").value = "Некорректные данные. Возможно деление на ноль?";
    }
    else {
        document.getElementById("outputNew").value = `${firstValue} ${operation} ${secondValue} = ${result}`; 
        previousExpression = `${firstValue} ${operation} ${secondValue} = ${result}`;
    }
}