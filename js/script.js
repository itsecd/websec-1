let prev_result = [];
let count_of_previous_results = 3;
/* TODO: validation for divide by zero, also for strings validation..*/
function ButtonClick()
{
  document.getElementById("field1").style.border = "red dashed 2px";
  document.getElementById("field2").style.border = "red dashed 2px";
  let operand1 = document.getElementById("field1").value;
  let operand2 = document.getElementById("field2").value;
  let operation = document.getElementById("operation").value;
  let valid_operands = true;
  let result = "";
  if (!operand1 || isNaN(operand1)) {
    result = "операнд 1 невалиден ";
    valid_operands = false;
    document.getElementById("field1").style.border = "blue solid 2px";
  }
  if (!operand2 || isNaN(operand2))
  {
    result += "операнд 2 невалиден";
    valid_operands = false;
    document.getElementById("field2").style.border = "blue solid 2px";
  }
  if (valid_operands)
  {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
  
    if (operation === "+")
    {
      result = operand1 + operand2;
    }
    else if (operation === "-")
    {
      result = operand1 - operand2;
    }
    else if (operation === "*")
    {
      result = operand1 * operand2;
    }
    else if (operation === "/")
    {
      if (Math.abs(operand2) < Number.EPSILON)
      {
        result = "На ноль делить нельзя";
        document.getElementById("field2").style.border = "blue solid 2px";
        valid_operands = false;
      }
      else
      {
        result = operand1 / operand2;
      }
    }
    prev_result.push(`${operand1} ${operation} ${operand2} = ${result}`);
  }
  else
  {
    prev_result.push(`Ошибка: ${result}!`);
  }
  // document.getElementById("result").value = result;
  console.log(operand1, operation, operand2, result, typeof operand1, typeof operand2, typeof result);
  const reveresed = [...prev_result].slice(0,-1);
  if (prev_result.length > 3) {
    prev_result.shift();
  }
  console.log(prev_result);
  console.log(prev_result.join("\n"));

  
  document.getElementById("result").innerHTML = `<p style="opacity: 50%">${reveresed.join("\r\n<br>")}</p><p>${prev_result.slice(-1)}</p>`;
  // document.getElementById("result").innerHTML = prev_result.join("\r\n");
}
