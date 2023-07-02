let pressedNumber = ''; 
let secondNumber = '';
let operation = '';


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

// The number before the operator
let equation = '';

// Register number button inputs
let numberInput = document.querySelectorAll('.button'); // Select all buttons

for(let i = 0; i < numberInput.length; i++){ // Loop through nodelist of buttons
    numberInput[i].addEventListener('click', ()=> {
        switch(operation){ 
            case '': // If operation button is not yet pressed
                console.log("----------------Pressed " + numberInput[i].value + "--------------");
                pressedNumber += numberInput[i].value; // See which number is pressed and add the value to pressedNumber
                equation += pressedNumber // Add number to equation
                console.log("Pressed numnber = " + pressedNumber)
                pressedNumber = ''; // Set first number back to blank to assign new value when button is pressed
                console.log("Equation = " + equation)
                updateDisplay(); // Update the display after the changes
                break;
            case 'division':
            case 'product':
            case 'add':
            case 'sub':
                secondNumber += numberInput[i].value;
                equation += secondNumber
                console.log("Second Number: " + secondNumber);
                secondNumber = '';
                console.log("Equation = " + equation)
                updateDisplay(); // Update the display after the changes
                break;
        }
    });
}

// Backspace button
let backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
    console.log("Deleted: " + (equation.slice(-1)))
    switch(equation.slice(-1)){
        case '÷':
        case 'x':
        case '+':
        case '-':
            equation = equation.substring(0, equation.length-1) // Remove last character from equation
            operation = '';
            console.log(equation)
            console.log(operation)
            break;
        default:
            equation = equation.substring(0, equation.length-1) // Remove last character from equation
    }
    
    // pressedNumber = ''; 
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

// Register operator button inputs

let operatorInput = document.querySelectorAll('.opButton');
let firstNumber = ''

for(let i = 0; i < operatorInput.length; i++){
    operatorInput[i].addEventListener('click', ()=> {
        console.log("Pressed: " + operatorInput[i].value)
        console.log(operatorInput[i].id)
        if(operation == '' && equation !== '' && equation !== '0'){
            switch(operatorInput[i].id){
                case 'division':
                    operation = 'division';
                    firstNumber += equation;
                    equation += operatorInput[i].value                    
                    console.log("Equation: " + equation)
                    console.log("Operation: " + operation)
                    updateDisplay();
                    break;
                case 'product':
                    operation = 'product';
                    firstNumber += equation;
                    equation += operatorInput[i].value                    
                    console.log("Equation: " + equation)
                    console.log("Operation: " + operation)
                    updateDisplay();
                    break;
                case 'add':
                    operation = 'add';
                    firstNumber += equation;
                    equation += operatorInput[i].value                    
                    console.log("Equation: " + equation)
                    console.log("Operation: " + operation)
                    updateDisplay();
                    break;
                case 'sub':
                    operation = 'sub';
                    firstNumber += equation;
                    equation += operatorInput[i].value                    
                    console.log("Equation: " + equation)
                    console.log("Operation: " + operation)
                    updateDisplay();
                    break;
            }
        }
    });
}

// Clear display

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', ()=> {
    // Set everything back to blank
    equation = '';
    pressedNumber = '';
    secondNumber = '';
    operation = '';
    updateDisplay();
    // Show changes in console
    console.log("----------------Pressed Clear--------------")
    console.log("Equation = " + equation)
    console.log("Pressed number = " + equation)
    
});

function addFunc(a, b) {
    return a + b;
}

function subFunc(a, b) {
    return a - b;
}

function multiplyFunc(a, b) {
    return a*b;
}

function divideFunc(a, b) {
    return a/b;
}



