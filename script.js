function buttonClickHandler(){
    let selectElem = document.getElementById("select1"); //действие
    
    let value1 = parseFloat(document.getElementById("input1").value);
    let value2 = parseFloat(document.getElementById("input2").value);
    let resultStr = document.getElementById("input1").value + " " + selectElem.value + " " + document.getElementById("input2").value + " = ";
    let result = 0.0;
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
            result = value1 / value2;
            break;
    }
    resultStr += result;
    document.getElementById("results").innerText = resultStr;
}