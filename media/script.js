function buttonClick(){
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;
    let operation = document.getElementById("operator").value;
    
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    resArr=[''];
    if ((isNaN(number1))||(isNaN(number2))) {
         document.getElementById("result").style.color="#880000";
         document.getElementById("result").value = "Введите число!";
        return;
    }
    if(operation === "+"){
        result = (`${number1}+${number2}=${number1+number2}`);
    }
    if(operation === "-"){
        result = (`${number1}-${number2}=${number1-number2}`);
    }
    if(operation === "*"){
        result = (`${number1}*${number2}=${number1*number2}`);
    }
    if(operation === "/"){
        if (Math.abs(number2) < Number.EPSILON){
            document.getElementById("result").style.color="#880000";
            document.getElementById("result").value = "Введите число!"
            return;
        }
        else{
            result = (`${number1}/${number2}=${number1/number2}`);
        }
    }

    resArr.unshift(document.getElementById("result").value);
    document.getElementById("history").value = resArr.join('\n');
    document.getElementById("result").style.color="red";
    document.getElementById("result").value = result;
    console.log("buttonClick", result);
}