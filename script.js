//Addition
const add = (num1, num2) => num1 + num2;
//Subtraction
const subtract = (num1, num2) => num1 - num2;
//Multiplication
const multiply = (num1, num2) => num1 * num2;
//Division
const divide = (num1, num2) => {
    if (num2 === 0) {
        return 'Error';
    } else {
        return num1 / num2;
    }
};

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
const display = document.getElementById('display');

//Buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === 'C') {
            display.textContent = '';
            return;
        } else if (buttonText === '=') {
            try {
            display.textContent = eval(display.textContent);
            } catch {
            display.textContent = 'Error';
            }
            return;
        } else if (buttonText === '←') {
            display.textContent = display.textContent.slice(0, -1) || '0';
            return;
        }

        if (display.textContent === '0' && !isNaN(buttonText)) {
            display.textContent = buttonText;
        } else {
            display.textContent += buttonText;
        }
        
    });
});