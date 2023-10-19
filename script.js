function calculate() {
    let selectedElement = document.getElementById("select");
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result;

    switch (selectedElement.value) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            if (Math.abs(number2 - 0) > Number.EPSILON)
                result = parseFloat(number1) / parseFloat(number2);
            else
                result = "Division by zero";
            break;
    }
    if (!isNaN(result))
        result = number1 + " " + selectedElement.value + " " + number2 + " " + "=" + " " + result;

    document.getElementById("result").innerHTML = result + "<br/>";
}
