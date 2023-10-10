function buttonClick() {

    let value1 = document.getElementById("field1").value;
    let value2 = document.getElementById("field2").value;
    let operation = document.getElementById("operation").value;

    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    let result = "";
    let previousResult = document.getElementById("result").value;

    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            if (Math.abs(value2 - 0) < Number.EPSILON) {
                alert("На ноль делить нельзя! Измените операцию или второе число.");
                return;
            }
            else {
                result = value1 / value2;
            }
            break;
    }

    result = value1 + " " + operation + " " + value2 + " = " + result + "\n";

    document.getElementById("result").value = result + previousResult;
}