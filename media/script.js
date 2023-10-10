function buttonClick() {

    let v1 = document.getElementById("field1").value;
    let v2 = document.getElementById("field2").value;
    let op = document.getElementById("operation").value;

    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    let result = "";

    if (op === "+") {
        result = v1 + v2;
    }

    if (op === "-") {
        result = v1 - v2;
    }

    if (op === "*") {
        result = v1 * v2;
    }

    if (op === "/") {
        if (Math.abs(v2 - 0) < Number.EPSILON) {
            result = "not on my watch bitch"
        }
        else {
            result = v1 / v2;
        }
    }

    document.getElementById("result").value = result;

    console.log("buttonClick", v1, v2, op, typeof v1, typeof v2);
}