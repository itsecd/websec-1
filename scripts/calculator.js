function calculate(){
    let value1 = document.getElementById("value1").value || 0;
    let value2 = document.getElementById("value2").value || 0;
    let operation = document.getElementById("selectOperations");
    
    switch (operation.value) {
        case '+':
            result = parseFloat(value1) + parseFloat(value2);
            break;
        case '-':
            result = parseFloat(value1) - parseFloat(value2);
            break;
        case '*':
            result = parseFloat(value1) * parseFloat(value2);
            break;
        case '/':
            if (Math.abs(value2 - 0) < Number.EPSILON)
                result = "division by zero";
            else
                result = parseFloat(value1) / parseFloat(value2);
            break;
        case '^':
            result = parseFloat(value1) ^ parseFloat(value2);
            break;
    }

    result = value1 + " " + operation.value + " " + value2 + " " + "=" + " " + result;

    document.getElementById("memory").innerHTML = document.getElementById("lastresult").innerHTML;  
    document.getElementById("lastresult").innerHTML = result + "<br/>";
}