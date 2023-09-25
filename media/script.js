
function onButtonClick(event)
{
    let v1 = document.getElementById("input1").value;
    let v2 = document.getElementById("input2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    let result = null;

    if (isNaN(v1) || isNaN(v2))
    {
        document.getElementById("output").value = "Error: enter the correct values!"
        console.log(document.getElementById("output").value);
        return;
    }
    else
    {
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
                if (v2 === 0)
                {
                    document.getElementById("output").value = "Error: can't divide by zero!";
                    console.log(document.getElementById("output").value);
                    return;
                }
                result = v1 + v2;
                break;
        }
    }

    document.getElementById("output").value = v1 + op + v2 + '=' + result;
    console.log(document.getElementById("output").value);
}

