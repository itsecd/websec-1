function buttonClick() {
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;
    let operation = document.getElementById("operation").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    if (isNaN(number1) || isNaN(number2)) {
        alert("Некорректные данные! Операция может быть выполнена только с числами.");
    }
    else {
        let result;
        if (operation === "+") {
            result = number1 + number2;
        }

        if (operation === "-") {
            result = number1 - number2;
        }

        if (operation === "*") {
            result = number1 * number2;
        }

        if (operation === "/") {
            if (Math.abs(number2) < Number.EPSILON) {
                alert("На ноль делить нельзя!");
                return;
            }
            else {
                result = number1 / number2;
            }
        }

        document.getElementById("result").value = number1 + " " + operation + " " + number2 + " = " + result;
    }

    console.log(`${number1} (${typeof number1}) ${operation} ${number2} (${typeof number2}) = ${result}`);
}