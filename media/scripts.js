function onClickHandler(){
    let v1 = document.getElementById("firstNumber").value;
    let v2 = document.getElementById("operation").value;
    let v3 = document.getElementById("secondNumber").value;
    console.log("onClick" + v1 + v2+ v3);
    if (v2 === '/')
    {
        if(Math.abs(v2)<Math.Number.EPSILION()){
            console.log("dasd");
        }
    }
}