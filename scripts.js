const output = document.getElementById('outputDisplay');

function updateDisplay() {
    output.textContent = firstNumber + "" + operation + "" +secondNumber;
}

// Numbers
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button0 = document.getElementById('button0');

let numberInput = document.querySelectorAll('.button')

for(let i = 0; i < numberInput.length; i++){
    numberInput[i].addEventListener('click', ()=> {
        switch(operation){
            case '':
                firstNumber += numberInput[i].value;
                console.log(firstNumber);
                output.textContent = firstNumber;
                break;
            default:
                secondNumber += numberInput[i].value;
                console.log(secondNumber);
                break;
        }
    });
}

// Operators
const divisionButton = document.getElementById('division');
const productButton = document.getElementById('product');
const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const decimalButton = document.getElementById('decimal');
const equalButton = document.getElementById('equal');

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', ()=> {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    output.textContent = 0;
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

