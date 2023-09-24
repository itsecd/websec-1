function onClickHandler(){
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;
    let op = document.getElementById("operationInput").value;
}


function error(str) 
{
  alert(str + " incorrent");
}

function calc() {
  let selectedElement = document.getElementById("select");

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("lastresult").value;

  if(isNaN(num1))
  {
    num2.onclick = error("First field");
    document.getElementById("num1").focus();
    return
  }
  if(isNaN(num2))
  {
    num2.onclick = error("Second field");
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
          if (parseFloat(num2) != 0)
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