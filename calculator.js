let firstInput = 0;
let secondInput = 0;
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

function getFirstNumbers(firstNumberValue) {
    console.log(firstNumberValue);
    return firstNumberValue;
}
const buttonNumbers = document.querySelectorAll('.numberButton');
const buttonOperator = document.querySelectorAll('.operatorButton');

let firstNumber = "";
let secondNumber = "";
let operator = "";
let dummyOperator = "";

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
        getDisplay.textContent = firstNumber + operator;
    })
})


