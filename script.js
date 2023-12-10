function OnClickHandler(){
    let first_value = document.getElementById("first_value").value;
    let operation = document.getElementById("operation").value;
    let second_value = document.getElementById("second_value").value;
    let result = null

    first_value = parseFloat(first_value)
    if (isNaN(first_value)){
        document.getElementById("first_value").style.backgroundColor="orange";
        alert("Это поле для чисел. Введите число");
        return;
    }
    second_value = parseFloat(second_value)
    if (isNaN(second_value)){
        document.getElementById("second_value").style.backgroundColor="orange";
        alert("Это поле для чисел. Введите число");
        return;
    }

    switch (operation){
        case "+":
            result = first_value + second_value;
            break;
        case "-":
            result = first_value - second_value;
            break;
        case "*":
            result = first_value * second_value;
            break;
        case "/":
            if(Math.abs(second_value) < Number.EPSILON){
                document.getElementById("second_value").style.backgroundColor="orange";
                alert("Вспомни математику, но 0 нельзя длелить...\nМожно, но я не умею считать пределы");
                return;
            }
            else{
                result = first_value / second_value;
                break;
            }
        default:
            break;
    }

    if (document.getElementById('result').value){
        document.getElementById('prev_result').value=document.getElementById('result').value;
    }
    document.getElementById("result").value = first_value+operation+second_value+"="+result;
}