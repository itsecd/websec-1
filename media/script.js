
function submitBtn(){
let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let operationBtn= document.getElementById("operation").value

let resultElement = "";
let histElement = document.getElementById("result").value
if(operationBtn === "+"){
    let sum = Number(input1.value)+Number(input2.value)
    resultElement=sum
}
if(operationBtn === "-"){
    let minus = Number(input1.value)-Number(input2.value)
    resultElement=minus
}
if(operationBtn === "*"){
    let mul = Number(input1.value)*Number(input2.value)
    resultElement=mul
}
if(operationBtn === "/"){
    if (Math.abs(input2.value) < Number.EPSILON){
        
        alert("На ноль делить нельзя!")
        return;
    }
    else{
        const delen = Number(input1.value)/Number(input2.value)
        resultElement=delen
    }
}
resHistory = input1.value + " " + operationBtn + " " + input2.value + " = " + resultElement;
document.getElementById("history").value = histElement;
document.getElementById("result").value = resHistory;
}