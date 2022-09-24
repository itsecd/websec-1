let results = []
const historySize = 5;

function calculate() {
    let lhsValue = document.getElementById("lhs").value
    let rhsValue = document.getElementById("rhs").value
    let op = document.getElementById("op").value

    if(!prechecks(lhsValue, rhsValue, op))
        return;

    let result = 0
    switch (op) {
        case "+":
            result = parseFloat(lhsValue) + parseFloat(rhsValue)
            break;
        case "-":
            result = parseFloat(lhsValue) - parseFloat(rhsValue)
            break;
        case "*":
            result = parseFloat(lhsValue) * parseFloat(rhsValue)
            break;
        case "/":
            result = parseFloat(lhsValue) / parseFloat(rhsValue)
            break;
    }
    results.push({operation: lhsValue + op + rhsValue+ "=", result: result});

    updateResult()
}

function updateResult(){
    let outputResult = []
    for (let i =0; i < results.length; i++){
        let str = `${results[i].operation}${results[i].result}`
        if (i === results.length - 1 ) {
            outputResult.push(`<p style="color: red">${str}</p>`)
        }
        else {
            outputResult.push(`<p style="color: lightcoral">${str}</p>`)
        }
    }
    document.getElementById("result").innerHTML =  outputResult.join("\n")
}

function prechecks(lhs, rhs, op) {
    if(lhs === "" || rhs === ""){
        alert("All fields must not be empty!")
        return false;
    }
    if (op === "/" && (rhs-0.0) < Number.EPSILON) {
        alert("Divisor must not be zero!")
        return false;
    }
    if (results.length > historySize) {
        results = results.slice(-historySize);
    }

    return true;
}