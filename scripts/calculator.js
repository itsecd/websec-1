function error(str) 
{
  alert("Value in " + str + " is not a number");
}

function calculate(){
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let operation = document.getElementById("selectOperations");
    let result = document.getElementById("lastresult").value;

    if(isNaN(value1))
    {
      value1.onclick = error("first field");
      document.getElementById("value1").focus();
      return
    }
    if(isNaN(value2))
    {
      value2.onclick = error("second field");
      document.getElementById("value2").focus();
      return
    }

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
            if (parseFloat(value2) != 0)
                result = parseFloat(value1) / parseFloat(value2);
            else
                result = "division by zero";
            break;
        case '^':
            result = parseFloat(value1) ^ parseFloat(value2);
            break;
    }

    if (!isNaN(result))
    result = value1 + " " + operation.value + " " + value2 + " " + "=" + " " + result;

    document.getElementById("memory").innerHTML = document.getElementById("lastresult").innerHTML;  
    document.getElementById("lastresult").innerHTML = result + "<br/>";
}