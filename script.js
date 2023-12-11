function onButtonClick(event){
    let v1 = document.getElementById("number1").value;
    let v2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;

    if (isNaN(v1) || isNaN(v2)) {
        alert("Пожалуйста, введите числовые значения.");
        return;
    }

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    if (op === "/" && v2 === 0) {
        alert("Деление на ноль невозможно.");
        return;
    }

    let result = null;

    if (op === "+"){
        result = v1 + v2;
    }
    else if(op === "-"){
        result = v1 - v2;
    }
    else if(op === "*"){
        result = v1 * v2;
    }
    else if(op === "/"){
        result = v1 / v2;
    }


    document.getElementById("results").value = result;
    console.log(v1, v2, op, typeof v1, typeof v2);
}
