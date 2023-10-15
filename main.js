function onClickHandler(event){
    var v1 = document.getElementById("num1").value;
    var v2 = document.getElementById("num2").value;
    var op = document.getElementById("operation").value;

var resultOut='';

  switch (op) {
      case '+':
        resultOut = parseFloat(v1) + parseFloat(v2);
          break;
      case '-':
        resultOut = parseFloat(v1) - parseFloat(v2);
          break;
      case '*':
        resultOut = parseFloat(v1) * parseFloat(v2);
          break;
      case '/':
          if (parseFloat(v2) != 0)
          resultOut = parseFloat(v1) / parseFloat(v2);
          else
          resultOut = "Division by zero";
          break;
  }
  resultOut = v1 + " " + op + " " + v2 + " " + "=" + " " + resultOut;

  document.getElementById('resultOp').innerHTML = document.getElementById('resultFin').innerHTML;
  document.getElementById('resultFin').style.opacity='0.5'; 
  document.getElementById('resultFin').innerHTML = document.getElementById('lastR').innerHTML; 
  document.getElementById('resultOp').style.opacity='0.5'; 
  document.getElementById('lastR').innerHTML = resultOut;

}
