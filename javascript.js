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


btnOne.addEventListener('click', () => {
    const One = "1";
    if (firstInput == 1 && secondInput == 0) {
    firstNumber = firstNumber + One;
    process.textContent = `${firstNumber}`;
    } else if (firstInput == 0 && secondInput == 1) {
        secondNumber = secondNumber + One;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
    }
} 
);
btnTwo.addEventListener('click', () =>{
    const Two = "2";
    firstNumber = firstNumber + Two;
    process.textContent = `${firstNumber}`;
});
btnThree.addEventListener('click', () =>{
    const Three = "3";
    firstNumber = firstNumber + Three;
    process.textContent = `${firstNumber}`;
});
btnFour.addEventListener('click', () =>{
    const Four = "4";
    firstNumber = firstNumber + Four;
    process.textContent = `${firstNumber}`;
});
btnFive.addEventListener('click', () =>{
    const Five = "5";
    firstNumber = firstNumber + Five;
    process.textContent = `${firstNumber}`;
});
btnSix.addEventListener('click', () =>{
    const Six = "6";
    firstNumber = firstNumber + Six;
    process.textContent = `${firstNumber}`;
});
btnSeven.addEventListener('click', () =>{
    const Seven = "7";
    firstNumber = firstNumber + Seven;
    process.textContent = `${firstNumber}`;
});
btnEight.addEventListener('click', () =>{
    const Eight = "8";
    firstNumber = firstNumber + Eight;
    process.textContent = `${firstNumber}`;
});
btnNine.addEventListener('click', () =>{
    const Nine = "9";
    firstNumber = firstNumber + Nine;
    process.textContent = `${firstNumber}`;
});
btnZero.addEventListener('click', () =>{
    const Zero = "0";
    firstNumber = firstNumber + Zero;
    process.textContent = `${firstNumber}`;
});

// functions - buttons
btnAdd.addEventListener('click', () =>{
    selectedFuncChar = "+";
    selectedFunc = 1;
    process.textContent = `${firstNumber} ${selectedFuncChar}`;
    firstInput = 0;
    secondInput = 1;
});
btnEquals.addEventListener('click', () => {
    if (selectedFunc === 1) {
    let resultFunc = (firstNumber + secondNumber);
    console.log(resultFunc);
    result.textContent = `${resultFunc}`
    }
    firstInput = 1;
    secondInput = 0;
});
