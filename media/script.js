let prevRes = "";

function onButtonClick(event){

    let v1 = document.getElementById("number1").value;
    let v2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    
    let result = null;
    let resultInfo = v1 + "" + op + "" + v2 + "" + "=";

    if(isNaN(v1) || isNaN(v2)){
        alert("Неверный данные! Ожидаются цифры")
        return;
    }


    switch (op){
        case "+":
            result = v1 + v2;
            break;
        case "-":
            result = v1 - v2;
            break;
        case "*":
            result = v1 * v2;
            break;
        case "/":
            if (v2 === 0){
                resultInfo = "Деление на ноль!";
                result = "";
            }
            else{
                result = v1 /v2;
            }
            break;
    }

    resultInfo += result;
    
    
    document.getElementById("results").value = prevRes + "\n" + resultInfo;
    prevRes = resultInfo;



}