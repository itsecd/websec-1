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

    if (result === Infinity)
        result = '\u221E'

    document.getElementById("outputNew").value = `${firstValue} ${operation} ${secondValue} = ${result}`; 
    previousExpression = `${firstValue} ${operation} ${secondValue} = ${result}`;
}