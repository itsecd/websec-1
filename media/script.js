function onButtonClick(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let var1 = parseFloat(input1.value);
    let var2 = parseFloat(input2.value);
    let operator = document.getElementById("operator").value;
    let docResult = document.getElementById("result");
    let prevResult = docResult;

    if (isNaN(var1)) { 
        input1.value = "";
        input1.style.background = "lightcoral";
        alert("Первое поле для ввода пусто!");
        return -1;
    }
    else if (isNaN(var2)) {
        input2.value = "";
        input2.style.background = "lightcoral";
        alert("Второе поле для ввода пусто!");
        return -1;
    }

    let result = null;
    let response = null;
    
    switch(operator){
        case "+":
            result = var1 + var2;
            break;
        case "-":
            result = var1 - var2;
            break;
        case "*":
            result = var1 * var2;
            break;
        case "/":
            if (var2 === 0){
                response = "Ошибка! На нуль делить нельзя!";
            }
            result = var1 / var2;
            break;
        default:
            alert("Выбрана неверная операция!");
    }
    let results = [];
    var k = 0;
    while (docResult.children[k]){
        
        if (prevResult.children[k].nodeName !== "BR"){
            results.unshift(docResult.children[k].value);
        }
        prevResult.children[k].remove();
    } 
    
    if (!response){
        result = var1.toString() + " " + operator + " " + var2.toString() + " " + "=" + " " + result.toString();
        results.unshift(result);
    }
    else{
        results.unshift(response);
    }
    max_elem = 4;
    if (window.screen.height <= 200){
        max_elem = 1;
    }
    else if (window.screen.height <= 400){
        max_elem = 2;
    }
    else if (window.screen.height <= 500){
        max_elem = 3;
    }
    while (results.length > max_elem) {
        results.pop();
    }
    results = results.reverse();
    for (var i = 0; i < results.length; i++){
        // console.log(results[i]);
        if (i != results.length - 1) {
            docResult.innerHTML += '<output class="resultLinePrev" readonly type="text">' + results[i] + '</output>';
            docResult.innerHTML += '<br />';
        }
        else if (results.length == 1) {
            if (!response){
                docResult.innerHTML += '<output class="resultLineCur" readonly type="text">' + results[i] + '</output>';
            }
            else{
                docResult.innerHTML += '<output class="resultLineCur" readonly type="text">' + response + '</output>';
            }
        }
        else{
            if (!response){
                docResult.innerHTML += '<br />';
                docResult.innerHTML += '<output class="resultLineCur" readonly type="text">' + results[i] + '</output>';
            }
            else{
                docResult.innerHTML += '<br />';
                docResult.innerHTML += '<output class="resultLineCur" readonly type="text">' + response + '</output>';
            }
        }
    };
}

function resetStyle(){
    let input1 = document.getElementById("input1");
    input1.style.background = "transparent";
    let input2 = document.getElementById("input2");
    input2.style.background = "transparent";
}
