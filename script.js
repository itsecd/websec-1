
function button_Click()
{
    let left_value = left_input.value;
    let right_value = right_input.value;
    let operation = document.getElementById("select");

    
    let result;

    if ((isNaN(left_value) || isNaN(right_value)))
    {
        result = "Mistake!!! Enter the number again";
        document.getElementById("left").value = "";
        document.getElementById("right").value = "";
    }
    else
    {
        console.log("text");
        
        if (operation.value=='sum')    
        {
            result = parseFloat(left_value) + parseFloat(right_value);
        }
        if (operation.value=='diff')
        {
            result = parseFloat(left_value) - parseFloat(right_value);

        }
        if (operation.value=='mul')
        {
            result = parseFloat(left_value) * parseFloat(right_value);
        }
        if (operation.value=='div')
        {
            if (Math.abs(right_value) < Number.EPSILON)
            {
                result = "They divide by zero only at the university. Change it!";
                document.getElementById("right").value = "";
            }
            else 
            {
            result = parseFloat(left_value) / parseFloat(right_value);
            }
        }
        
        
    }
    

    document.getElementById("results").innerText = result;
}
