function isNumber(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

function buttonClickHandler()
{
    let selectorElem = document.getElementById("select1");
    console.log(selectorElem.value)

    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    var result;

    if (!isNumber(value1)) {
        result = "В левом окне ввода должно быть целое число или вещественное число с точкой!";
    }
    else if (!isNumber(value2)) {
        
        result = "В правом окне ввода должно быть целое число или вещественное число с точкой!";
    }

    else {

    switch (selectorElem.value){
        case 'plus':
            result = parseFloat(value1) + parseFloat(value2);
            break;
        case 'minus':
            result = parseFloat(value1) - parseFloat(value2);
            break;
        case 'multiply':
            result = parseFloat(value1) * parseFloat(value2);
            break;
        case 'division':
            if (Math.abs(value2) < Number.EPSILON)
            {
                result = "На ноль делить нельзя!";
            }
            else {
            result = parseFloat(value1) / parseFloat(value2);
            break;
            }
    }
}

    document.getElementById("results").innerText = result;
    console.log(value1,value2)
}