function calc() {
    let a = document.getElementById("field1").value;
    let b = document.getElementById("field2").value;
    let op = document.getElementById("operation").value;

    a = parseFloat(a);
    if (isNaN(a)) {
        alert("Некорректные данные в левой ячейке! Введите число");
        return;
    }

    b = parseFloat(b);
    if (isNaN(b)) {
        alert("Некорректные данные в правой ячейке! Введите число");
        return;
    }

    let res = "";
    let prevRes = document.getElementById("curResult").value;

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
            if (Math.abs(b) < Number.EPSILON) {
                alert("Некорректные данные в правой ячейке! На ноль делить нельзя");
                return;
            }
            else {
                res = a / b;
                break;
            }
    }

    curRes = a + " " + op + " " + b + " = " + res;

    document.getElementById("prevResult").value = prevRes;
    document.getElementById("curResult").value = curRes;
}
