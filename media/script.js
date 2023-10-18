function onButtonClick(event) {
    let v1 = document.getElementById("number1").value;
    let v2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;
    
    const inp2 = document.getElementById("number2")
    const inp1 = document.getElementById("number1")

    let previousOperation = document.getElementById('previous-operation');
    let currentOperation = document.getElementById('current-operation');
    let cur = document.getElementById('current-operation').value;
    
    let result = null;
    inp1.classList.remove("highlight");
    inp2.classList.remove("highlight");
    
    if (isNaN(v1))
    {
        result = `Ошибка: "${v1}" не является числом`;
        inp1.classList.add("highlight");}
    else{
        inp1.classList.remove("highlight");
        if (isNaN(v2)) 
        {
            result = `Ошибка: "${v2}" не является числом`;
            inp2.classList.add("highlight");}
        else{
            inp2.classList.remove("highlight");
            v1 = parseFloat(v1);
            v2 = parseFloat(v2);
            if (op === '+') {
                result = `${v1} ${op} ${v2} = ${v1 + v2}`;
            }
            if (op === '-') {
                result = `${v1} ${op} ${v2} = ${v1 - v2}`;
            }
            if (op === '*') {
                result =` ${v1} ${op} ${v2} = ${v1 * v2}`;
            }
            if (op === '/') {
                if (Math.abs(v2) < Number.EPSILON){
                    inp2.classList.add("highlight");
                    result = `Ошибка: делить на ноль нельзя`;
                }
                else{
                    inp2.classList.remove("highlight");
                    result = `${v1} ${op} ${v2} = ${v1 / v2}`;}
            }
        }
    }
    if (cur == null){
        previousOperation.textContent = ``;
    }
    else{previousOperation.textContent = `${cur}`;}
    currentOperation.textContent = `${result}`;
    
    document.getElementById('current-operation').value = `${result}`;
}