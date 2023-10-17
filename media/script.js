let result = null;
let prevResult = Array();


function onClickHandler() {

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").value = "Ошибка в вводимых числах";
    }
    else {
        if (prevResult.length > 2) prevResult.shift();
        if (result != null) prevResult.push(result);
        
        
        switch(operation) {
            case "+": 
                result = `${number1} + ${number2} = ${number1  + number2}`;
                break;
            case "-":
                result = `${number1} - ${number2} = ${number1 - number2}`;
                break;
            case "*":
                result = `${number1} * ${number2} = ${number1 * number2}`;
                break;
            case "/":
                if (Math.abs(number2) < Number.EPSILON) {
                    result = "Деление на 0";
                }
                else {
                    result = `${number1} / ${number2} = ${number1 / number2}`;
                }
        }
        
        document.getElementById("prevResults").value = prevResult.join("\n");
        document.getElementById("result").value = result;
    }
}