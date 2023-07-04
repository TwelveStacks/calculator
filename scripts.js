let pressedNumber = ''; 
let secondNumber = '';
let operation = '';

const equationOutput = document.getElementById('equationOutput');

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
                console.log("1. Equation = " + equation)
                updateDisplay(); // Update the display after the changes
                break;
            case 'division':
            case 'product':
            case 'add':
            case 'sub':
                pressedNumber += numberInput[i].value;
                equation += pressedNumber;
                secondNumber += pressedNumber;
                console.log("Second Number: " + secondNumber);
                pressedNumber = '';
                console.log("2. Equation = " + equation)
                updateDisplay(); // Update the display after the changes
                break;
        }
    });
}

// Decimal button

const decimalButton = document.getElementById('decimal');

// Check if second number has decimal
let decimalCounter = false; 

decimalButton.addEventListener('click', () => {
    if(!equation.includes('.') && operation == ''){
        equation += '.';
        updateDisplay();
    } else if(equation.includes('.') && operation != '' && decimalCounter == false){
        equation += '.';
        if(secondNumber !== ''){
            secondNumber += '.'
        }
        decimalCounter = true;
        updateDisplay();
    }
});

// Backspace button
const backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
    console.log("Deleted: " + (equation.slice(-1)))
    switch(equation.slice(-1)){
        case '÷':
        case 'x':
        case '+':
        case '-':
            equation = equation.substring(0, equation.length-1) // Remove last character from equation
            operation = '';
            firstNumber = '';
            console.log(equation)
            console.log(operation)
            break;
        case '.':
            equation = equation.substring(0, equation.length-1) // Remove last character from equation
            decimalCounter = false;
            break;
        default:
            equation = equation.substring(0, equation.length-1) // Remove last character from equation 
    if(secondNumber !== ''){
        secondNumber = secondNumber.substring(0, secondNumber.length-1)
    }
    console.log("Second Number: " + secondNumber)
}

    // pressedNumber = ''; 
    updateDisplay(); // Update display after changes
    // Show changes in console
    console.log("----------------Pressed Backspace--------------")
    console.log("Equation = " + equation)
});

// Register operator button inputs

let operatorInput = document.querySelectorAll('.opButton');
let firstNumber = ''

for(let i = 0; i < operatorInput.length; i++){
    operatorInput[i].addEventListener('click', ()=> {
        console.log("Pressed: " + operatorInput[i].value)
        console.log("Id: " + operatorInput[i].id)
        if(operation == '' && equation !== '' && equation !== '0'){
            firstNumber = '';
            switch(operatorInput[i].id){
                case 'division':
                    operation = 'division';
                    firstNumber += equation;
                    equation += operatorInput[i].value;                
                    console.log("Equation: " + equation);
                    console.log("Operation: " + operation);
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

// Equal button

const equalButton = document.getElementById('equal')

equalButton.addEventListener('click', () => {
    switch(operation){
        case 'division':
            equation = divideFunc(firstNumber, secondNumber).toString();
            console.log("Function output" + equation)
            operation = '';
            secondNumber = '';
            firstNumber = equation;
            console.log("After" + equation)
            updateDisplay();
            break;
        case 'product':
            equation = multiplyFunc(firstNumber, secondNumber).toString();
            console.log("Function output" + equation)
            operation = '';
            secondNumber = '';
            firstNumber = equation;
            console.log("After" + equation)
            updateDisplay();
            break;
        case 'add':
            equation = addFunc(firstNumber, secondNumber).toString();
            console.log("Function output " + equation)
            operation = '';
            secondNumber = '';
            firstNumber = equation;
            console.log("First number: " + firstNumber)
            updateDisplay();
            break;
        case 'sub':
            equation = subFunc(firstNumber, secondNumber).toString();
            console.log("Function output" + equation)
            operation = '';
            secondNumber = '';
            firstNumber = equation;
            console.log("After" + equation)
            updateDisplay();
            break;
    }
    decimalCounter = false;
})

// Clear display

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', ()=> {
    // Set everything back to blank
    equationOutput.textContent = '\xa0';
    equation = '';
    pressedNumber = '';
    secondNumber = '';
    operation = '';
    firstNumber = '';
    decimalCounter = false;
    updateDisplay();
    // Show changes in console
    console.log("----------------Pressed Clear--------------")
    console.log("Equation = " + equation)
    console.log("Pressed number = " + equation)
    
});

function addFunc(a, b) {
    equationOutput.textContent = a + "+" + b
    console.log(parseFloat(a) + " + " + parseFloat(b))
    return Math.round((parseFloat(a) + parseFloat(b))*100) / 100;
}

function subFunc(a, b) {
    equationOutput.textContent = a + "-" + b
    return Math.round((parseFloat(a) - parseFloat(b))*100) / 100;
}

function multiplyFunc(a, b) {
    equationOutput.textContent = a + "x" + b
    return Math.round((parseFloat(a) * parseFloat(b))*100) / 100;
}

function divideFunc(a, b) {
    equationOutput.textContent = a + "÷" + b
    return Math.round((parseFloat(a) / parseFloat(b))*100) / 100;
}

function evaluteFunc() {
    if(operation == 'division'){
        equation = divideFunc(firstNumber, secondNumber);
        secondNumber = '';
        operation = '';
        console.log("Reset")
        updateDisplay();
    }
    else if(operation == 'product'){
        equation = multiplyFunc(firstNumber, secondNumber);
        secondNumber = '';
        operation = '';
        console.log("Reset")
        updateDisplay();
    }
    else if(operation == 'add'){
        equation = addFunc(firstNumber, secondNumber);
        secondNumber = '';
        operation = '';
        console.log("Reset")
        updateDisplay();
    }
    else if(operation == 'sub'){
        equation = subFunc(firstNumber, secondNumber);
        secondNumber = '';
        operation = '';
        console.log("Reset")
        updateDisplay();
    }
}


