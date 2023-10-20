function onButtonClick(event) {
    const input1 = document.getElementById("number1")
    const input2 = document.getElementById("number2")

    let value1 = input1.value;
    let value2 = input2.value;
    let operation = document.getElementById("operation").value;

    let previousOperation = document.getElementById('prevOperation');
    let currentOperation = document.getElementById('curOperation');
    let cur = currentOperation.value;

    let result = null
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);


    if ((!input1.checkValidity() || !input2.checkValidity()))
    {
        result = `Error! Fields are filled in incorrectly`;
    }else {


        switch (operation) {
            case '+':
                result = `${value1} ${operation} ${value2} = ${value1 + value2}`;
                break;
            case '-':
                result = `${value1} ${operation} ${value2} = ${value1 - value2}`;
                break;
            case '*':
                result = `${value1} ${operation} ${value2} = ${value1 * value2}`;
                break;
            case '/':
                if (Math.abs(value2) < Number.EPSILON) {
                    input2.setCustomValidity("Invalid field.");
                    result = `Error! Division by zero!`;
                } else {
                    result = `${value1} ${operation} ${value2} = ${value1 / value2}`;
                }
        }
    }
    if (cur == null) {
        previousOperation.textContent = ``;
    } else {
        previousOperation.textContent = `${cur}`;
    }
    currentOperation.textContent = `${result}`;

    document.getElementById('curOperation').value = `${result}`;
}