const firstNumber = +prompt("Enter your first number: ");
const secondNumber = +prompt("Enter your second number: ");
const operation = prompt("Enter the operation you want to do(/,*,-,+):");
let result;

switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
}
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("You didn't enter a number.");
} else if (
  operation != "+" &&
  operation != "-" &&
  operation != "/" &&
  operation != "*"
) {
  alert("You didn't enter an operation.");
} else {
  alert("Result: " + firstNumber + operation + secondNumber + " = " + result);
}
