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


// Register operator button inputs

// let operatorInput = document.querySelectorAll('.opButton');

// for(let i = 0; i < operatorInput.length; i++){
//     operatorInput[i].addEventListener('click', ()=> {
//         console.log("Pressed: " + operatorInput[i].id)
//         if(operation == ''){
//             switch(operatorInput[i].id){
//                 case 'divison':
//                     operation = 'division';
//                     output.textContent = equation + "÷"
//                     console.log(operatorInput[i])
//                     break;
//             }
//         }
//     });
// }

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

let pressedNumber = '';
let secondNumber = '';
let operation = '';

function operate(pressedNumber, secondNumber, operation) {
    add(pressedNumber, secondNumber);
}

