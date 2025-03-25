//Addition
const add = (num1, num2) => num1 + num2;
//Subtraction
const subtract = (num1, num2) => num1 - num2;
//Multiplication
const multiply = (num1, num2) => num1 * num2;
//Division
const divide = (num1, num2) => num1 / num2;
    if (num === 0) {
        return "Nice try, buddy boy!"
    }
    else {
        return num1 / num2;
    }

//Operate
const operate = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

//Display
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let displayValue = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let operatorClicked = false;
let equalsClicked = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (equalsClicked) {
                displayValue = '';
                firstNumber = '';
                secondNumber = '';
                operator = '';
                result = '';
                operatorClicked = false;
                equalsClicked = false;
            }
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
        if (button.classList.contains('operator')) {
            if (operatorClicked) {
                firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(displayValue));
                display.textContent = firstNumber;
                displayValue = '';
                operator = button.textContent;
            }
            if (!operatorClicked) {
                firstNumber = displayValue;
                operator = button.textContent;
                operatorClicked = true;
                displayValue = '';
            }
        }
        if (button.classList.contains('equals')) {
            secondNumber = displayValue;
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            display.textContent = result;
            equalsClicked = true;
        }
        if (button.classList.contains('clear')) {
            displayValue = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
            result = '';
            operatorClicked = false;
            equalsClicked = false;
            display.textContent = displayValue;
        }
    })
}