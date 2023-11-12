//const history = [];
let prev_result = [];
let count_of_previous_results = 3;

function calculate() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operator = document.getElementById("operator").value;
    //const resultElement = document.getElementById("result");
    //const historyElement = document.getElementById("history");

    const num1Value = num1Input.value;
    const num2Value = num2Input.value;
    const num1 = parseFloat(num1Value);
    const num2 = parseFloat(num2Value);

    let result;


    if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
        result = "Error: Input correct numbers.";
    } 
    else 
    {
        switch (operator) {
            case "+":
                result = num1 + num2;           
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result = "Error: Division by zero.";
                }
                else{
                    result = num1 / num2;
                }
                break;
            default:
                result = "Error: Wrong operation.";
                return;
            }
    }

    prev_result.push(`${num1} ${operator} ${num2} = ${result}`);
    const reveresed = [...prev_result].slice(0,-1);
    document.getElementById("result").innerHTML = `<p style="opacity: 50%">${reveresed.join("\r\n<br>")}</p><p>${prev_result.slice(-1)}</p>`;
    if (prev_result.length > count_of_previous_results) {          
            prev_result.shift();
    }
}

function validateInput(inputElement) {
    const inputValue = inputElement.value;
    const validValue = inputValue.replace(/,/g, '.');
    inputElement.value = validValue;
}


