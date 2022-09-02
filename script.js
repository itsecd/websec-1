function buttonClickHandler(){
    let selectElem = document.getElementById("select1"); //действие
    
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    value1 = parseFloat(value1.replace(/[^\d.-]/g, ''));
    value2 = parseFloat(value2.replace(/[^\d.-]/g, ''));

    let resultStr = String(value1) + " " + selectElem.value + " " + String(value2) + " = ";
    let result = 0.0;
    let correct = true;

    if (isNaN(value1) || isNaN(value2))
    {
        correct = false;
        resultStr = "Не хватает данных, либо они некорректные";
    }

    if (correct){
        switch(selectElem.value){
            case "+":
                result = value1 + value2;
                break;
            case "-":
                result = value1 - value2;
                break;
            case "*":
                result = value1 * value2;
                break;
            case "/":
                if(value2 !== 0){
                    result = value1 / value2;
                }
                else{
                    resultStr = "На ноль делить нельзя";
                    result = "";
                }
                break;
        }
        
        resultStr += result;
    }
    document.getElementById("results").innerText = resultStr;
}