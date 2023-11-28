function buttonClick() {
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;
    let operation = document.getElementById("operation").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    let result_str = "";
    let prev_result_str = document.getElementById("result").textContent;
    console.log("Prev:", prev_result_str)

    if (isNaN(number1) || isNaN(number2)) {
        alert("Некорректные данные! Операция может быть выполнена только с числами.");
    }
    else {
        let result_value;
        if (operation === "+") {
            result_value = number1 + number2;
        }

        if (operation === "-") {
            result_value = number1 - number2;
        }

        if (operation === "*") {
            result_value = number1 * number2;
        }

        if (operation === "/") {
            if (Math.abs(number2) < Number.EPSILON) {
                alert("На ноль делить нельзя!");
                return;
            }
            else {
                result_value = number1 / number2;
            }
        }
        result_str = `${number1} ${operation} ${number2} = ${result_value}`;
        // document.getElementById("result").value = number1 + " " + operation + " " + number2 + " = " + result;
        document.querySelector('#result').innerHTML = result_str;
        console.log("Prev2:", prev_result_str)
        document.querySelector('#prev_result').innerHTML = prev_result_str;
        console.log(`${number1} (${typeof number1}) ${operation} ${number2} (${typeof number2}) = ${result_value}`);
    }
}