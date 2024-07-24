
const getDisplay = document.querySelector('#screen');

function addNumbers(numOne, numTwo) {
    return +numOne + +numTwo;
}

function subtractNumbers(numOne, numTwo) {
    return numOne - numTwo;
}

function multiplyNumbers(numOne, numTwo) {
    return numOne * numTwo;
}

function divideNumbers(numOne, numTwo) {
    return numOne / numTwo;
}

// function solve(firstInput, secondInput) {
//     for(let i = 0; i < 4; i++) {
//         switch(operator) {
//             case '+':
//                 getDisplay.textContent = addNumbers(firstInput, secondInput);
//                 break;
//             case '-':
//                 console.log(subtractNumbers(firstInput, secondInput));
//                 break;
//             case '*':
//                 console.log(multiplyNumbers(firstInput, secondInput));
//                 break;
//             case '/':
//                 console.log(divideNumbers(firstInput, secondInput));
//                 break
//         }
//     }
// }

const buttonNumbers = document.querySelectorAll('.numberButton');
const buttonOperator = document.querySelectorAll('.operatorButton');

let firstNumber = "";
let secondNumber = "";
let operator = "";
let dummyOperator = "";
let total = "";
buttonNumbers.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if(operator == "") {
        const numberOneValue = this.value;
        firstNumber += numberOneValue;
        getDisplay.textContent = firstNumber;
        } else if(operator !== dummyOperator) {
            const numberTwoValue = this.value;
            secondNumber += numberTwoValue;
            getDisplay.textContent = firstNumber + operator + secondNumber;
        }
    })
})

buttonOperator.forEach(operatorButton => {
    operatorButton.addEventListener('click',function() {
        const operatorValue = this.value;
        operator = operatorValue
        if(secondNumber !== "") {
            getTotal();
        } else if(secondNumber == ""){
        getDisplay.textContent = firstNumber + operator;
        }
    })
})


function getTotal(){
    switch(operator) {
        case '+':
            total = +firstNumber + +secondNumber;
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
            break;
        case '−':
            total = +firstNumber - +secondNumber;
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
            break;
        case '×':
            total = +firstNumber * +secondNumber;
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
            break;
        case '÷':
            total = +firstNumber / +secondNumber;
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
            break;
    }
}

const getEqual = document.querySelector('#equal');
getEqual.addEventListener('click', function() {
    getTotal();
})

const getClear = document.querySelector('#clear');
getClear.addEventListener('click', function () {
    firstNumber = "";
    operator = ""
    secondNumber = ""
    getDisplay.textContent = "";
})
