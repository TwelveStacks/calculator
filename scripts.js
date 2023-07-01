const output = document.getElementById('outputDisplay');

function updateDisplay() {
    // Check if equation length is 0
    if(equation.length == 0){
        output.textContent = 0; // If equation length equal '' display 0
    } else if(equation.charAt(0) == '.'){ // Check if equation = '.'
        equation = '0.' // 
        output.textContent = equation;
    } else if(equation == '0'){ // If equation is 0 and a number is pressed
        equation = ''; // Set equation to '' so that it will not have a 0 in front
        output.textContent = 0; // Set display to show 0 while equation is blank
    }
    else {
        output.textContent = equation; // Set output display to equation
    }
}

let equation = '';

// Register number button inputs
let numberInput = document.querySelectorAll('.button') // Select all buttons

for(let i = 0; i < numberInput.length; i++){ // Loop through nodelist of buttons
    numberInput[i].addEventListener('click', ()=> {
        switch(operation){ 
            case '': // If operation button is not yet pressed
                console.log("----------------Pressed " + numberInput[i].value + "--------------");
                firstNumber += numberInput[i].value; // See which number is pressed and add the value to firstNumber
                equation += firstNumber // Add number to equation
                console.log("First numnber = " + firstNumber)
                firstNumber = ''; // Set first number back to blank to assign new value when button is pressed
                console.log("Equation = " + equation)
                updateDisplay(); // Update the display after the changes
                break;
            default:
                secondNumber += numberInput[i].value;
                console.log(secondNumber);
                break;
        }
    });
}

// Backspace button
let backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
    equation = equation.substring(0, equation.length-1) // Remove last character from equation
    // firstNumber = ''; 
    updateDisplay(); // Update display after changes
    // Show changes in console
    console.log("----------------Pressed Backspace--------------")
    console.log("Equation = " + equation)
});

// Operators
const divisionButton = document.getElementById('division');
const productButton = document.getElementById('product');
const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const decimalButton = document.getElementById('decimal');
const equalButton = document.getElementById('equal');

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', ()=> {
    // Set everything back to blank
    equation = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
    updateDisplay();
    // Show changes in console
    console.log("----------------Pressed Clear--------------")
    console.log("Equation = " + equation)
    console.log("First number = " + equation)
    
});

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let firstNumber = '';
let secondNumber = '';
let operation = '';

function operate(firstNumber, secondNumber, operation) {
    add(firstNumber, secondNumber);
}

