function calc() {
    let a = document.getElementById("field1").value;
    let b = document.getElementById("field2").value;
    let op = document.getElementById("operation").value;

    a = parseFloat(a);
    b = parseFloat(b);

    let res = "";
    
    switch (op) {
        case "+":
            res = a + b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            res = a / b;
            break;
    }
    
    document.getElementById("result").value = res;
}
