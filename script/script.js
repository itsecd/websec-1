function onButtonClick(event) {
    const input1 = document.getElementById("number1")
    const input2 = document.getElementById("number2")

    input1.classList.remove("highlight");
    input2.classList.remove("highlight");

    let value1 = document.getElementById("number1").value;
    let value2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;


    let previousOperation = document.getElementById('prevOperation');
    let currentOperation = document.getElementById('curOperation');
    let cur = document.getElementById('curOperation').value;

    let result = null;


    if (isNaN(value1))
    {
        result = `Error! "${value1}" is not a number!`;
        input1.classList.add("highlight");}
    else{
        input1.classList.remove("highlight");
        if (isNaN(value2))
        {
            result = `Error! "${value2}" is not a number!`;
            input2.classList.add("highlight");}
        else{
            input2.classList.remove("highlight");
            value1 = parseFloat(value1);
            value2 = parseFloat(value2);


            switch(operation)
            {
                case '+':
                    result = `${value1} ${operation} ${value2} = ${value1 + value2}`;
                    break;
                case '-':
                    result = `${value1} ${operation} ${value2} = ${value1 - value2}`;
                    break;
                case '*':
                    result = `${value1} ${operation} ${value2} = ${value1 * value2}`;
                    break;
                case '/':
                    if (Math.abs(value2) < Number.EPSILON){
                        input2.classList.add("highlight");
                        result = `Error! Division by zero!`;
                    }
                    else{
                        input2.classList.remove("highlight");
                        result = `${value1} ${operation} ${value2} = ${value1 / value2}`;}
            }
        }
    }
    if (cur == null){
        previousOperation.textContent = ``;
    }
    else{previousOperation.textContent = `${cur}`;}
    currentOperation.textContent = `${result}`;

    document.getElementById('curOperation').value = `${result}`;
}