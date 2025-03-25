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