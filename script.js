
function OnClickHandler(){
    document.getElementById("number1").style.backgroundColor='rgb(186,255,200)';
    document.getElementById("number2").style.backgroundColor='rgb(186,255,200)';
    let v1 = document.getElementById("number1").value;
    let v2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    if (isNaN(v1))
    {
        document.getElementById("number1").style.backgroundColor='yellow';
        alert('Введите число');
        return;
    }
    if (isNaN(v2))
    {
        document.getElementById("number2").style.backgroundColor='yellow';
        alert('Введите число');
        return;
    }
    
    console.log(v1, v2, op, typeof v1, typeof v2);

    let result = null;

    switch (op) {
        case '+':
            result=v1+v2;
            break;
        case '-':
            result=v1-v2;
            break;
        case '*':
            result=v1*v2;
            break;
        case '/':
            if (Math.abs(v2)<Number.EPSILON){
                alert('Нельзя делить на ноль');
                document.getElementById("number2").style.backgroundColor='yellow';
                return;
            }
            else
                result=v1/v2;
                break;
        default:
            break;
    }
    document.getElementById('prevResult').value=document.getElementById('result').value;
    document.getElementById('result').value=v1+op+v2+'='+result;
}

