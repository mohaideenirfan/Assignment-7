function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
            break;
    }
    document.getElementById("result").innerText = "Result: " + result;
}

function square() {
    const num = parseFloat(document.getElementById("num1").value);
    document.getElementById("result").innerText = "Square: " + (num * num);
}

function cube() {
    const num = parseFloat(document.getElementById("num1").value);
    document.getElementById("result").innerText = "Cube: " + (num * num * num);
}
