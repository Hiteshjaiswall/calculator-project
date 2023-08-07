import "./styles.css";

var display = document.getElementById("screen");
var button = document.getElementsByClassName("btn");
var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "*") {
      operator = "*";
      operand1 = parseFloat(display.textContent);
      display.innerText = null;
    } else if (value == "+") {
      operator = "+";
      operand1 = parseFloat(display.textContent);
      display.innerText = null;
    } else if (value == "-") {
      operator = "-";
      operand1 = parseFloat(display.textContent);
      display.innerText = null;
    } else if (value == "/") {
      operator = "/";
      operand1 = parseFloat(display.textContent);
      display.innerText = null;
    } else if (value == "+/-") {
      value = -parseFloat(display.textContent);
      display.innerText = value;
    } else if (value == "%") {
      operator = "%";
      operand1 = parseFloat(display.textContent);
      display.innerText = null;
    } else if (value == "=") {
      if (operand1 == null) {
        display.innerText = ERROR;
      } else if (operator == "%") {
        operand2 = 100;
        operator = "/";
        var result = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = result;
      } else {
        operand2 = parseFloat(display.textContent);
        var result = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = result;
      }
    } else if (value == "AC") {
      display.innerText = null;
      operand1 = 0;
      operator = null;
      operand2 = null;
    } else {
      display.innerText += value;
    }
  });
}
