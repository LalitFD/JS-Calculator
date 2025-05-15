let expression = "";

function action(btn) {
    const value = btn.innerText;
    const display = document.getElementById("para");

    if (value === "AC") {
        expression = "";
        display.innerText = "";
    } else if (value === "DEL") {
        expression = expression.slice(0, -1);
        display.innerText = expression;
    } else if (value === "=") {
        try {
            // Replace symbols with JS operators
            let result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
            display.innerText = result;
            expression = result.toString(); // so next input continues from result
        } catch (error) {
            display.innerText = "Error";
            expression = "";
        }
    } else {
        expression += value;
        display.innerText = expression;
    }
}
