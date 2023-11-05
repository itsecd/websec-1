function buttonClick(){
    let v1 = document.getElementById("field1").value;
    let v2 = document.getElementById("field2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);
    let result = "";
    let previous_result = document.getElementById("result").value;

    if ((isNaN(v1)) || (isNaN(v2))) {
        document.getElementById("result").style.color="red";
        document.getElementById("result").value = "Пожалуйста, введите число!";
       return;
   }

    if (op === "+") {
        result = (`${v1} + ${v2} = ${v1 + v2}`);
    }
    if (op === "-") {
        result = (`${v1} - ${v2} = ${v1 - v2}`);
    }
    if (op === "*") {
        result = (`${v1} * ${v2} = ${v1 * v2}`);
    }
    if (op === "/") {
        if (Math.abs(v2) < Number.EPSILON) {
            result = "Низя :(";
        }
        else {
            result = (`${v1} / ${v2} = ${v1 / v2}`);
        }
    }
    
    document.getElementById("history").style.color="darksalmon";
    document.getElementById("history").value = previous_result;
    document.getElementById("result").style.color="red";
    document.getElementById("result").value = result;
}