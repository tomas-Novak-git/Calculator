// Number buttons
const btnOne = document.getElementById('btnNumOne');
const btnTwo = document.getElementById('btnNumTwo');
const btnThree = document.getElementById('btnNumThree');
const btnFour = document.getElementById('btnNumFour');
const btnFive = document.getElementById('btnNumFive');
const btnSix = document.getElementById('btnNumSix');
const btnSeven = document.getElementById('btnNumSeven');
const btnEight = document.getElementById('btnNumEight');
const btnNine = document.getElementById('btnNumNine');
const btnZero = document.getElementById('btnNumZero');

// Function buttons
const btnEquals = document.getElementById('btnEquals');
const btnAdd = document.getElementById('btnAdd');
const btnDeduct = document.getElementById('btnDeduct');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
const btnEmpty = document.getElementById('btnEmpty');
const btnDelete = document.getElementById('btnDelete');

// Process and result display
const process = document.getElementById('process');
const result = document.getElementById('result');

// input order and func variables.
let firstInput = 1;
let secondInput = 0;
let selectedFunc = 0;
let selectedFuncChar = "";

// Variables storing numbers
let firstNumber = "";
let secondNumber = "";
let numberResult = "";

// Number buttons
btnOne.addEventListener('click', () => {
    numberAdd(1);
});
btnTwo.addEventListener('click', () =>{
    numberAdd(2);
});
btnThree.addEventListener('click', () =>{
    numberAdd(3);
});
btnFour.addEventListener('click', () =>{
    numberAdd(4);
});
btnFive.addEventListener('click', () =>{
    numberAdd(5);
});
btnSix.addEventListener('click', () =>{
    numberAdd(6);
});
btnSeven.addEventListener('click', () =>{
    numberAdd(7);
});
btnEight.addEventListener('click', () =>{
    numberAdd(8);
});
btnNine.addEventListener('click', () =>{
    numberAdd(9);
});
btnZero.addEventListener('click', () =>{
    numberAdd(0);
});

// functions - buttons
btnAdd.addEventListener('click', () =>{
    if (firstInput == 0) {
        selectedFuncChar = "";
        selectedFunc = 0; 
    } else if (firstInput == 1) {
    selectedFuncChar = "+";
    selectedFunc = 1;
    }
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
});
btnDeduct.addEventListener('click', () =>{
    selectedFuncChar = "-";
    selectedFunc = 2;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
});
btnMultiply.addEventListener('click', () =>{
    selectedFuncChar = "*";
    selectedFunc = 3;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
});
btnDivide.addEventListener('click', () =>{
    selectedFuncChar = "/";
    selectedFunc = 4;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
});
btnEquals.addEventListener('click', () => {
    if (selectedFunc === 1) {
        let resultFunc = (Number(firstNumber) + Number(secondNumber));
        result.textContent = `${resultFunc}`
    } else if (selectedFunc === 2) {
        let resultFunc = (Number(firstNumber) - Number(secondNumber));
        result.textContent = `${resultFunc}`
    } else if (selectedFunc === 3) {
        let resultFunc = (Number(firstNumber) * Number(secondNumber));
        result.textContent = `${resultFunc}`
    } else if (selectedFunc === 4) {
        let resultFunc = (Number(firstNumber) / Number(secondNumber));
        result.textContent = `${resultFunc}`
    }
    firstInput = 1;
    secondInput = 0;
});
btnEmpty.addEventListener('click', () => {
    firstInput = 1;
    secondInput = 0;
    selectedFunc = 0;
    selectedFuncChar = "";
    firstNumber = "";
    secondNumber = "";
    numberResult = "";
    process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
    result.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
});

function numberAdd(a) {
const Number = `${a}`;
    if (firstInput == 1 && secondInput == 0) {
    firstNumber = firstNumber + Number;
    process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
    } else if (firstInput == 0 && secondInput == 1) {
        secondNumber = secondNumber + Number;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
    }
}