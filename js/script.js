let prev_result = [];
let count_of_previous_results = 3;
/* TODO: validation for divide by zero, also for strings validation..*/
function ButtonClick()
{
  let operand1 = document.getElementById("field1").value;
  let operand2 = document.getElementById("field2").value;
  let operation = document.getElementById("operation").value;
  let result = "";
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
      result = "На ноль делить нельзя!";
    }
    else
    {
      result = operand1 / operand2;
    }

  }
  document.getElementById("result").value = result;
  console.log(operand1, operation, operand2, result, typeof operand1, typeof operand2, typeof result);
  prev_result.push(`${operand1} ${operation} ${operand2} = ${result}`);
  if (prev_result.length > 3) {
    prev_result.shift();
  }
  console.log(prev_result);
  console.log(prev_result.join("\n"));
}
