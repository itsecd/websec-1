function err(str)
{
    alert(str + " is not a number")
}

function onClickHandler(event){
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;
    let op = document.getElementById("operation").value;
    let res = document.getElementById("resultField");


  if(isNaN(num1)||isNaN(num2))
  { 
    res.textContext = "Incorrect numbers"
  }
  else{
    let resultField;
    //previos nums
  }

  switch (op) {
      case '+':
          result = parseFloat(num1) + parseFloat(num2);
          //prev...
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

}