historyArr = []

function calculate(){
    const lhsInput = document.getElementById("firstArg")
    const rhsInput = document.getElementById("secondArg");
    const operator = document.getElementById("operation").value;

    resultField = document.getElementById("result").textContent;

    let lhs = parseFloat(lhsInput.value);
    let rhs = parseFloat(rhsInput.value);

    if (isNaN(lhs) || isNaN(rhs)){
        alert("Введите числа в поля ввода!");
        return;
    }
    calcResult = calc(lhs, rhs, operator);
    if (Number.isFinite(calcResult) && !Number.isNaN(calcResult)){
        updateHistory(resultField);
        resultField = lhsInput.value  + ' ' + operator + ' ' + rhsInput.value + ' = ' + String(calcResult);
        document.getElementById("result").textContent = resultField;
    }
    else{
        if (!Number.isFinite(calcResult)){
            alert("Выберите числа с меньшим числом символов!");
            return;
        }
        else{
            alert("Происходит делени на 0!");
            return;
        }
    }
}

function calc(lhs, rhs, operator){
    switch(operator){
        case '+':
            return lhs + rhs;
        case '-':
            return lhs - rhs;
        case '*':
            return lhs * rhs;
        case '/':
            if (rhs === 0){
                return NaN;
            }
            else{
                return lhs / rhs;
            }
        default:
            alert("Недопустимая операция!");
    }
}

function updateHistory(prevResult){
    const ul = document.getElementById("ulHistory");
    for (i = 0; i <= historyArr.length; i++){
        const li = document.createElement("li");
        li.classList.add("historyElem");
        li.innerHTML = prevResult;
        ul.appendChild(li);
    }
}