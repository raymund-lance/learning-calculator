let firstInput = 0;
let secondInput = 0;
let operator;

function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
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

function solve() {
    firstInput = prompt("input first number");
    operator = prompt("Enter operator + - * /");
    secondInput = prompt("Enter second number");
    for(let i = 0; i < 4; i++) {
        switch(operator) {
            case '+':
                console.log(addNumbers(firstInput, secondInput));
                break;
            case '-':
                console.log(subtractNumbers(firstInput, secondInput));
                break;
            case '*':
                console.log(multiplyNumbers(firstInput, secondInput));
                break;
            case '/':
                console.log(divideNumbers(firstInput, secondInput));
                break
        }
    }
}
solve();