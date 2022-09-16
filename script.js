let option = document.getElementById("selection");
let value1 = document.getElementById("input1");
let value2 = document.getElementById("input2");
let result = document.getElementById("result");

function calculate() {

    if(checkInput()) {
        switch (option.value) {
            case "sum":
                res = parseFloat(value1.value) + parseFloat(value2.value);
                result.innerText = res;
                break;
            case "sub":
                res = parseFloat(value1.value) - parseFloat(value2.value);
                result.innerText = res;
                break;
            case "mult":
                res = parseFloat(value1.value) * parseFloat(value2.value);
                result.innerText = res;
                break;
            case "div":
                if (Math.abs(value2.value) < Number.EPSILON){
                    alert("Division by zero is not allowed!")
                    break;
                }
                res = parseFloat(value1.value) / parseFloat(value2.value);
                result.innerText = res;
                break;
            }
    }
}

function checkInput() {
    if(value1.value == "" || value2.value == ""){
        alert("Incorrect input.")
        return false;
    }
    else return true;
}