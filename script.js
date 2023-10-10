function Handler(){
    document.getElementById("firstNumber").style.backgroundColor='hsl(127, 100%, 86%)';
    document.getElementById("secondNumber").style.backgroundColor='hsl(127, 100%, 86%)';
    let firstValue=document.getElementById("firstNumber").value;
    let secondValue=document.getElementById("secondNumber").value;
    let operation=document.getElementById("operation").value;
    var flag=true;
    if (isNaN(firstValue))
    {
        document.getElementById("firstNumber").style.backgroundColor='green';
        flag=false;
    }
    if (isNaN(secondValue))
    {
        document.getElementById("secondNumber").style.backgroundColor='green';
        flag=false;
    }
    if(!flag)
    {
        alert('Введите корректное значение');
        return;
    }
    firstValue=parseFloat(firstValue);
    secondValue=parseFloat(secondValue);
    let result = null;
    console.log(firstValue,secondValue,operation)
    switch (operation) {
        case '+':
            result=firstValue+secondValue;
            break;
        case '-':
            result=firstValue-secondValue;
            break;
        case '*':
            result=firstValue*secondValue;
            break;
        case '/':
            if (Math.abs(secondValue)<Number.EPSILON){
                alert('Нельзя делить на ноль');
                document.getElementById("secondNumber").style.backgroundColor='green';
                return;
            }
            else
                result=firstValue/secondValue;
                break;
        default:
            break;
    }
    document.getElementById('prevResult').value=document.getElementById('result').value;
    document.getElementById('prevResult').style.opacity='0.5';
    document.getElementById('result').value=firstValue+operation+secondValue+'='+result;
}