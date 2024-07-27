let firstNumber = "";
let secondNumber = "";
let operator = "";
let prevOperator = "";
let dummyOperator = "";
let total = "";

const getDisplay = document.querySelector('#display');

function getTotal(changingOperator) {
    switch(changingOperator) {
        case '+':
            total = +firstNumber + +secondNumber;
            firstNumber = total;
            secondNumber = "";
            break;
        case '−':
            total = +firstNumber - +secondNumber;
            firstNumber = total;
            secondNumber = "";
            break;
        case '×':
            total = +firstNumber * +secondNumber;
            firstNumber = total;
            secondNumber = "";
            break;
        case '÷':
            total = +firstNumber / +secondNumber;
            firstNumber = total;
            secondNumber = "";
            break;
        case '%':
            total = +firstNumber % +secondNumber;
            firstNumber = total;
            secondNumber = "";
            break;
        case '^':
            total = Math.pow(+firstNumber, +secondNumber);
            firstNumber = total;
            secondNumber = "";
            break;
        case '√':
            total = Math.sqrt(+firstNumber);
            firstNumber = total;
            secondNumber = "";
            break;
    }
    return total;
}


const buttonNumbers = document.querySelectorAll('.numberButton');
buttonNumbers.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if(operator == dummyOperator) {
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

const buttonOperator = document.querySelectorAll('.operatorButton');
buttonOperator.forEach(operatorButton => {
    operatorButton.addEventListener('click',function() {
        const operatorValue = this.value;
        prevOperator = operator;
        operator = operatorValue
        if(secondNumber == "") {
        getDisplay.textContent = firstNumber + operator;
        } else if(secondNumber !== "") {
            getTotal(prevOperator);
            getDisplay.textContent = total + operator;
        }
    })
})

const getEqual = document.querySelector('#equal');
getEqual.addEventListener('click', function() {
    getTotal(operator);
    getDisplay.textContent = total;
})

const getClear = document.querySelector('#clear');
getClear.addEventListener('click', function () {
    firstNumber = "";
    operator = ""
    secondNumber = ""
    getDisplay.textContent = "";
})

const getRoot = document.querySelector('#root');
getRoot.addEventListener('click', () => {
    getTotal("√");
    getDisplay.textContent = total;
})