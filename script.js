function isNumber(str) 
{
    if (typeof str != "string") 
    {
        return false 
    }
    return !isNaN(str) && !isNaN(parseFloat(str))
}


  function Nenado(str) 
  {
    let ii=false;
    for(let i=0; i<str.length; i++)
    {
        if(str[i] !="0"||str[i] !="1"||str[i] !="2"||str[i] !="3"||str[i] !="4"||str[i] !="5"||str[i] !="6"||str[i] !="7"||str[i] !="8"||str[i] !="9"||str[i] !=",")
        {
            ii=true;
        }
    }
    return ii
  }

function button_Click()
{
    let left_value = document.getElementById("left").value;
    let right_value = document.getElementById("right").value;
    let operation = document.getElementById("select");

    
    let result;

    if((left_value.indexOf(",")!=-1||right_value.indexOf(",")!=-1)&&(Nenado(left_value)||Nenado(right_value)))
    {
        result = "¬веди с точкой мне лень переписывать парсер";
    }
    else
    {
        if (!isNumber(left_value) || !isNumber(right_value)) 
        {
            result = "¬веди целое или число с точной!!!!!!!!!!";
            document.getElementById("left").value = "";
            document.getElementById("right").value = "";
        }
        else 
        {

        
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
                    result = "Ќа ноль дел€т только в вузе) мен€й!";
                    document.getElementById("right").value = "";
                }
                else 
                {
                result = parseFloat(left_value) / parseFloat(right_value);
                }
            }
        
        }
    }
    

    document.getElementById("results").innerText = result;
}