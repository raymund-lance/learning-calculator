let firstNumber = "";
let secondNumber = "";
let operator = "";
let dummyOperator = "";
let total = "";

const getDisplay = document.querySelector('#screen');

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
        case '%':
            total = +firstNumber % +secondNumber;
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
            break;
        case '^':
            total = Math.pow(+firstNumber, +secondNumber);
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
            break;
        case '√':
            total = Math.sqrt(+firstNumber);
            firstNumber = total;
            secondNumber = "";
            getDisplay.textContent = total;
    }
}


const buttonNumbers = document.querySelectorAll('.numberButton');
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

const buttonOperator = document.querySelectorAll('.operatorButton');
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

const getRoot = document.querySelector('#root');
getRoot.addEventListener('click', () => {
    getTotal();
})