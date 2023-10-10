function error(str) 
{
  alert(str + " incorrent");
}

function calc() {
  let selectedElement = document.getElementById("select");

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result;

  if(isNaN(num1))
  {
    error("First field");
    document.getElementById("num1").focus();
    return
  }
  if(isNaN(num2))
  {
    error("Second field");
    document.getElementById("num2").focus();
    return
  }

  switch (selectedElement.value) {
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
          if (Math.abs(num2 - 0) > Number.EPSILON)
              result = parseFloat(num1) / parseFloat(num2);
          else
              result = "Division by zero";
          break;
  }
  if (!isNaN(result))
      result = num1 + " " + selectedElement.value + " " + num2 + " " + "=" + " " + result;
  
  document.getElementById("memory1").innerHTML = document.getElementById("memory").innerHTML;
  document.getElementById("memory").innerHTML = document.getElementById("lastresult").innerHTML;  
  document.getElementById("lastresult").innerHTML = result + "<br/>";
}
