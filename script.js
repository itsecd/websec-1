let prev_calculation = ''
let output = '';

function onClickHandler() {
    document.getElementById("operand_1").style.backgroundColor="darkseagreen";
    document.getElementById("operand_2").style.backgroundColor="darkseagreen";
    let value_1 = document.getElementById("operand_1").value;
    let value_2 = document.getElementById("operand_2").value;
    let operation = document.getElementById("operation").value;

    value_1 = parseFloat(value_1);
    value_2 = parseFloat(value_2);
    let result = null;

    if (isNaN(value_1)) {
        document.getElementById("operand_1").style.backgroundColor="darkolivegreen";
        document.getElementById("prev_result").value = output;
        document.getElementById("result").value = "В первом окне не число";
        return;
    }
    if (isNaN(value_2)) {
        document.getElementById("operand_2").style.backgroundColor="darkolivegreen";
        document.getElementById("prev_result").value = output;
        document.getElementById("result").value = "Во втором окне не число";
        return;
    }
    
    prev_calculation = output;
    switch(operation){
        case '+':
            result = value_1 + value_2;
            break;
        case '-':
            result = value_1 - value_2;
            break;
        case '*':
            result = value_1 * value_2;
            break;
        case '/':
            if (Math.abs(value_2) < Number.EPSILON) {
                document.getElementById("operand_2").style.backgroundColor="darkolivegreen";
                document.getElementById("prev_result").value = output;
                document.getElementById("result").value = "На ноль делить нельзя";
                return;
            }
            result = value_1 / value_2;
            break;
        default:
            result = Nan;
            break;
    }
    output = '';
    output = output.concat(value_1, ' ', operation, ' ', value_2, ' = ', result);
    document.getElementById("result").value = output;
    document.getElementById("prev_result").value = prev_calculation;
    var original = textarea.textContent;
}