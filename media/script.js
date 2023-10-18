function onButtonClick(event)
{
    const num1Input = document.getElementById("input1");
    const num2Input = document.getElementById("input2");

    let v1 = document.getElementById("input1").value;
    let v2 = document.getElementById("input2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    let result = null;

    if (isNaN(v1) || isNaN(v2))
    {
        num1Input.classList.add("blinking");
        num2Input.classList.add("blinking");
        document.getElementById("resultLast").value = "Введены некорректные данные"
        console.log(document.getElementById("output").value);
        return;
    }
    else
    {
        num1Input.classList.remove("blinking");
        num2Input.classList.remove("blinking");
        switch(op)
        {
            case '+':
                result = v1 + v2;
                break;
            case '-':
                result = v1 - v2;
                break;
            case '*':
                result = v1 * v2;
                break;
            case '/':
                if (Math.abs(v2) < Number.EPSILON) 
                {
                    num2Input.classList.add("blinking");
                    document.getElementById("resultLast").value = "Нельзя делить на 0";
                    console.log(document.getElementById("output").value);
                    return;
                }
                result = v1 + v2;
                break;
        }
    }

    document.getElementById("output").value = document.getElementById("output").value + v1 + op + v2 + '=' + result + "\n";
    document.getElementById("resultLast").value = v1 + op + v2 + '=' + result;
}