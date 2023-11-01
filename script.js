function error(str) {
  alert("Значение в " + str + " не является корректным!");
}

function calculate() {
    let num1 = document.getElementById("first_input").value;
    let num2 = document.getElementById("second_input").value;
    let operation = document.getElementById("selectOperations");
    let result = document.getElementById("this_result").value;

    if(isNaN(num1)) {
      num1.onclick = error("первом поле");
      document.getElementById("first_input").focus();
      return
    }
    if(isNaN(num2)) {
      num2.onclick = error("втором поле");
      document.getElementById("second_input").focus();
      return
    }

    switch (operation.value) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if (Math.abs(num2 - 0) < Number.EPSILON)
                result = "На ноль делить нельзя!";
            else
                result = parseFloat(num1) / parseFloat(num2);
            break;
    }

    if (!isNaN(result))
    result = num1 + " " + operation.value + " " + num2 + " " + "=" + " " + result;

    document.getElementById("last_result").innerHTML = document.getElementById("this_result").innerHTML;  
    document.getElementById("this_result").innerHTML = result + "<br/>";
}