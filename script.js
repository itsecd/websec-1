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
        document.getElementById("output2").value = document.getElementById("output1").value;
        document.getElementById("output1").value = "неверные данные"
        console.log(document.getElementById("output1").value);
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
                if ((Math.abs(v2) < Number.EPSILON))
                {
                    document.getElementById("output2").value = document.getElementById("output1").value;
                    document.getElementById("output1").value = "на ноль делить нельзя";
                    console.log(document.getElementById("output1").value);
                    return;
                }
                result = v1 / v2;
                break;
        }
    }
    document.getElementById("output2").value = document.getElementById("output1").value;
    document.getElementById("output1").value = v1 + op + v2 + '=' + result;
    console.log(document.getElementById("output1").value);
}
