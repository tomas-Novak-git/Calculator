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
const btnDot = document.getElementById('btnDot');

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
let numberResult = 0;

// Number buttons
btnOne.addEventListener('click', () => {
    numberAdd(1)
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
btnDot.addEventListener('click', () => {
    numberAdd(".");
})
// Function buttons
btnAdd.addEventListener('click', () =>{
    addFunc()
});
btnDeduct.addEventListener('click', () =>{
    deductFunc()
});
btnMultiply.addEventListener('click', () =>{
    multiplyFunc()
});
btnDivide.addEventListener('click', () =>{
    divideFunc()
});
btnEquals.addEventListener('click', () => {
    equalsFunc();
    result.textContent = `${numberResult}`;
    firstInput = 0;
    secondInput = 0;
});
btnEmpty.addEventListener('click', () => {
    btnCE()
});
btnDelete.addEventListener('click', () => {
    btnC()
})
// numberButtons - keyboard
document.addEventListener('keypress', (event) => { 
    if(event.key == "1") {numberAdd(1);}
    if(event.key == "2") {numberAdd(2);}
    if(event.key == "3") {numberAdd(3);}
    if(event.key == "4") {numberAdd(4);}
    if(event.key == "5") {numberAdd(5);}
    if(event.key == "6") {numberAdd(6);}
    if(event.key == "7") {numberAdd(7);}
    if(event.key == "8") {numberAdd(8);}
    if(event.key == "9") {numberAdd(9);}
    if(event.key == "0") {numberAdd(0);}
    if(event.key == ".") {numberAdd(".");}
    if(event.key == "+") {addFunc();}
    if(event.key == "-") {deductFunc();}
    if(event.key == "*") {multiplyFunc();}
    if(event.key == "/") {divideFunc();}
    if(event.key == "Enter") {equalsFunc();
        result.textContent = `${numberResult}`}
    if(event.key == "=") {equalsFunc();
        result.textContent = `${numberResult}`}
 })
//  deleting buttons - keyboard
 document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'z') {
        btnC();
    }  else if (event.key === 'Backspace') {
        btnCE();
    }
 })



function numberAdd(a) {
const Number =`${a}`;
    if (firstInput == 1 && secondInput == 0) {
    firstNumber = firstNumber + Number;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    } else if (firstInput == 0 && secondInput == 1) {
        secondNumber = secondNumber + Number;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`
    }
}
function btnCE() {
    firstInput = 1;
    secondInput = 0;
    selectedFunc = 0;
    selectedFuncChar = "";
    firstNumber = "";
    secondNumber = "";
    numberResult = "";
    process.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
    result.textContent = `${firstNumber}${selectedFuncChar} ${secondNumber}`;
};
function btnC() {
    if (firstInput == 1 && secondInput == 0) {
        let reducedNum = firstNumber.slice(0, -1);
        firstNumber = reducedNum;
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    }  else if (firstInput == 0 && secondInput == 1) {
        let reducedNum = secondNumber.slice(0, -1);
        secondNumber = reducedNum;
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    }
}
function contEquation(a) {
    firstNumber = numberResult;
    secondNumber = "";
    selectedFunc = a;
    if (a == 1) {
        selectedFuncChar = "+";
    }
    else if (a == 2) {
        selectedFuncChar = "-";
    }
    else if (a == 3) {
        selectedFuncChar = "*";
    }
    else if (a == 4) {
        selectedFuncChar = "/";
    }
    firstInput = 0;
    secondInput = 1;
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    result.textContent = "";
}
function addFunc() {
    if (firstInput == 1 && secondInput == 0) {
        selectedFuncChar = "+";
        selectedFunc = 1; 
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    } else if (firstInput == 0 && secondInput == 0) {
        contEquation(1)
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    }  else if (firstInput == 0 && secondInput == 1 && secondNumber !== 0) {
        equalsFunc();
        firstNumber = numberResult;
        secondNumber = "";
        selectedFuncChar = "+";
        selectedFunc = 1; 
        firstInput = 0;
        secondInput = 1;
        process.textContent = `${firstNumber} ${selectedFuncChar}`;
    } 
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
}
function deductFunc() {
    if (firstInput == 1 && secondInput == 0) {
        selectedFuncChar = "-";
        selectedFunc = 2; 
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    } else if (firstInput == 0 && secondInput == 0) {
        contEquation(2)
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    }   else if (firstInput == 0 && secondInput == 1 && secondNumber !== 0) {
        equalsFunc();
        firstNumber = numberResult;
        secondNumber = "";
        selectedFuncChar = "-";
        selectedFunc = 2; 
        firstInput = 0;
        secondInput = 1;
        process.textContent = `${firstNumber} ${selectedFuncChar}`; }
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
}
function multiplyFunc() {
    if (firstInput == 1 && secondInput == 0) {
        selectedFuncChar = "*";
        selectedFunc = 3; 
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    } else if (firstInput == 0 && secondInput == 0) {
        contEquation(3)
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    }   else if (firstInput == 0 && secondInput == 1 && secondNumber !== 0) {
        equalsFunc();
        firstNumber = numberResult;
        secondNumber = "";
        selectedFuncChar = "*";
        selectedFunc = 3; 
        firstInput = 0;
        secondInput = 1;
        process.textContent = `${firstNumber} ${selectedFuncChar}`; }
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
}
function divideFunc() {
    if (firstInput == 1 && secondInput == 0) {
        selectedFuncChar = "/";
        selectedFunc = 4; 
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    } else if (firstInput == 0 && secondInput == 0) {
        contEquation(4)
        process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
        console.log(firstInput, secondInput);
    }   else if (firstInput == 0 && secondInput == 1 && secondNumber !== 0) {
        equalsFunc();
        firstNumber = numberResult;
        secondNumber = "";
        selectedFuncChar = "/";
        selectedFunc = 4; 
        firstInput = 0;
        secondInput = 1;
        process.textContent = `${firstNumber} ${selectedFuncChar}`; }
    process.textContent = `${firstNumber} ${selectedFuncChar} ${secondNumber}`;
    firstInput = 0;
    secondInput = 1;
}
function equalsFunc() {
    if (selectedFunc == 1) {
        numberResult = (Number(firstNumber) + Number(secondNumber)).toFixed(3).toString().replace(".000", "");
    } else if (selectedFunc == 2) {
        numberResult = (Number(firstNumber) - Number(secondNumber)).toFixed(3).toString().replace(".000", "");
    } else if (selectedFunc == 3) {
        numberResult = (Number(firstNumber) * Number(secondNumber)).toFixed(3).toString().replace(".000", "");
    } else if (selectedFunc == 4) {
        numberResult = (Number(firstNumber) / Number(secondNumber)).toFixed(3).toString().replace(".000", "");
    } 
}