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
    process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
    } else if (firstInput == 0 && secondInput == 1) {
        secondNumber = secondNumber + One;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
    }
} 
);
btnTwo.addEventListener('click', () =>{
    const Two = "2";
    if (firstInput == 1 && secondInput == 0) {
    firstNumber = firstNumber + Two;
    process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
    } else if (firstInput == 0 && secondInput == 1) {
        secondNumber = secondNumber + Two;
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
    }
});
btnThree.addEventListener('click', () =>{
    const Three = "3";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Three;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Three;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnFour.addEventListener('click', () =>{
    const Four = "4";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Four;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Four;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnFive.addEventListener('click', () =>{
    const Five = "5";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Five;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Five;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnSix.addEventListener('click', () =>{
    const Six = "6";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Six;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Six;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnSeven.addEventListener('click', () =>{
    const Seven = "7";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Seven;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Seven;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnEight.addEventListener('click', () =>{
    const Eight = "8";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Eight;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Eight;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnNine.addEventListener('click', () =>{
    const Nine = "9";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Nine;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Nine;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});
btnZero.addEventListener('click', () =>{
    const Zero = "0";
    if (firstInput == 1 && secondInput == 0) {
        firstNumber = firstNumber + Zero;
        process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
        } else if (firstInput == 0 && secondInput == 1) {
            secondNumber = secondNumber + Zero;
            process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
        }
});

// functions - buttons
btnAdd.addEventListener('click', () =>{
    selectedFuncChar = "+";
    selectedFunc = 1;
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
})