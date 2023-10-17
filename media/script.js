let output_result = '';
let previous_output = '';

function onButtonClick(event) {
    let v1 = document.getElementById("number1").value;
    let v2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    let = result = null;

    if (isNaN(v1) || isNaN(v2)) {
        document.getElementById("previous_result").value = output_result;
        document.getElementById("result").value = "В полях ввода должны быть числа";
        return;
    }

    previous_output = output_result;
    if (op === '+'){
        result = v1 + v2;
    }
    if (op === '-'){
        result = v1 - v2;
    }
    if (op === '*'){
        result = v1 * v2;
    }
    if (op === '/'){
        if (Math.abs(v2) < Number.EPSILON) {
            result = null;
        } 
        else {
            result = v1 / v2; 
        }
    }
    
    output_result = '';
    output_result = output_result.concat(v1, ' ', op, ' ', v2, ' = ', result);

    if (Math.abs(v2) < Number.EPSILON) {
        document.getElementById("previous_result").value = previous_output;
        document.getElementById("result").value = "Деление на 0";
        output_result = "Деление на 0";
    }
    else {
        document.getElementById("previous_result").value = previous_output;
        document.getElementById("result").value = output_result;
    }
    
    console.log(v1, v2, op, typeof v1, typeof v2);

}