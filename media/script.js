function buttonClick() {
    document.getElementById("field1").style.border = "1px dashed red";
    document.getElementById("field2").style.border = "1px dashed red";

    let value1 = document.getElementById("field1").value;
    let value2 = document.getElementById("field2").value;
    let operation = document.getElementById("operation").value;

    value1 = parseFloat(value1);
    if (isNaN(value1)) {
        document.getElementById("field1").style.border = "2px solid red";
        alert("Некорректные данные в левой ячейке! Введите число");
        return;
    }

    value2 = parseFloat(value2);
    if (isNaN(value2)) {
        document.getElementById("field2").style.border = "2px solid red";
        alert("Некорректные данные в правой ячейке! Введите число");
        return;
    }

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
                document.getElementById("field2").style.border = "2px solid red";
                alert("На ноль делить нельзя! Измените операцию или второе число.");
                return;
            }
            else {
                result = value1 / value2;
            }
            break;
    }

    result = value1 + " " + operation + " " + value2 + " = " + result;

    document.getElementById("previousResult").value = previousResult;
    document.getElementById("result").value = result;
}