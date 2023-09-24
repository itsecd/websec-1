function onClickHandler(){
    let v1 = document.getElementById("number1").value;
    let v2 = document.getElementById("number2").value;
    let op = document.getElementById("operation").value;

    /*console.log(v1,v2,op);
v1=parseFloat(v1);
...
*/
    let result=null;
    if(OP==='+')
    {
        result=v1+v2;
    }
    if(OP==='*')
    {
        result=v1*v2;
    }
    if(OP==='/')
    {
        if(Math.abs(v2)<Number.EPSILON()){
result="wrong";
        }
        else{
            result=v1/v2;
        }
    }
document.getElementById("result").value=result;

}