function onClickHandler(){

    let v1 = document.getElementById("firstNumber").value;
    let operation = document.getElementById("operation").value;
    let v3 = document.getElementById("secondNumber").value;
    
    let prev_result = document.getElementById("result").value;
    document.getElementById("prev_result").value = prev_result;

    v1 = parseFloat(v1)
    v3 = parseFloat(v3)
    let result = null
    let flag = true;
    if (isNaN(v1))
    {
        document.getElementById("firstNumber").style.backgroundColor='orange';
        flag=false;
    }
    if (isNaN(v3))
    {
        document.getElementById("secondNumber").style.backgroundColor='orange';
        flag=false;
    }
    if(!flag)
    {
        document.getElementById("result").value = "Введите только числа";
        return;
    }
    document.getElementById("firstNumber").style.backgroundColor = "aquamarine";
    document.getElementById("secondNumber").style.backgroundColor = "aquamarine";
    switch (operation)
    {

        case "+":
            result = v1 + v3;
            break;
        case "-":
            result = v1 - v3;
            break;
        case "*":
            result = v1 * v3;
            break;
        case "/":
            if(Math.abs(v3) < Number.EPSILON){
                document.getElementById("secondNumber").style.backgroundColor='orange';
                document.getElementById("result").value = "Не не не... На ноль не делить!!!";
                return;
            }
            else{
                result = v1 / v3;
            }
            break;
    
    }
    document.getElementById("result").value = "".concat(v1, " ", operation, " ", v3, " = ", result);
    
}