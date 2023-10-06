function error(str) {
  alert("Значение в " + str + " не является корректным!");
}

function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("selectOperations");
    let result = document.getElementById("lastresult").value;

    if(isNaN(num1))
    {
      num1.onclick = error("первом поле");
      document.getElementById("num1").focus();
      return
    }
    if(isNaN(num2))
    {
      num2.onclick = error("втором поле");
      document.getElementById("num2").focus();
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
            if (parseFloat(num2) != 0)
                result = parseFloat(num1) / parseFloat(num2);
            else
                result = "На ноль делить нельзя!";
            break;
    }

    if (!isNaN(result))
    result = num1 + " " + operation.value + " " + num2 + " " + "=" + " " + result;

    document.getElementById("memory").innerHTML = document.getElementById("lastresult").innerHTML;  
    document.getElementById("lastresult").innerHTML = result + "<br/>";
}