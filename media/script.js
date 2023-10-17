function buttonClick() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let operation = document.getElementById("operation").value;
    let result = "";

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

    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (Math.abs(b - 0) < Number.EPSILON) {
                alert("Деление на 0");
                return;
            }
            else {
                result = a / b;
            }
            break;
    }

    result = a + " " + operation + " " + b + " = " + result;

    document.getElementById("result").value = result;
}