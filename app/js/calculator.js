oldValues = [];

function myException(message, field){
  alert(message);
  document.getElementById(field).innerHTML = null;
  return;
}

function getNumberByField(element, isCanZero = true) {
  let num = document.getElementById(element).value;

  if(isNaN(num)) {
    myException('Введенное значение поля ' + element + ' не является числом.', element);
    return;
  }
  if(!isCanZero && num == 0){
    myException('Поле ' + element + ' не может принимать значение 0.', element);
    return;
  }
  return Number(num);
}

function calculation(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }

  myException("Операция не определена", "result");
}

function outputFormatting() {
  if (oldValues.length === 4) {
    oldValues.shift();
  }

  resultStr = "";

  for (i = 0; i < oldValues.length; i++) {
    resultStr += `<span style="">${oldValues[i]}</span></br>`;
  }
  return resultStr;
}

function calc() {
  let operation = document.getElementById("operation").value;

  let num1 = getNumberByField("num1");
  let num2 = getNumberByField("num2", operation != "/");

  if(num1 == null || num2 == null)
    return;

  let result = calculation(num1, num2, operation);

  let oldResult = outputFormatting();
  let newResult = `${num1} ${operation} ${num2} = ${result}`;

  oldValues.push(newResult);

  document.getElementById('oldResult').innerHTML = oldResult;
  document.getElementById('result').innerHTML = newResult;
}