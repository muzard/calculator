function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

const one = document.querySelector(".one")
one.addEventListener("click", () => addNum(1))

const two = document.querySelector(".two")
two.addEventListener("click", () => addNum(2))

const three = document.querySelector(".three")
three.addEventListener("click", () => addNum(3))

const zero = document.querySelector(".zero")
zero.addEventListener("click", () => addNum(0))

const plus = document.querySelector(".plus")
plus.addEventListener("click", () => sumNums())

const minus = document.querySelector(".minus")
minus.addEventListener("click", () => minusNums())


const four = document.querySelector(".four")
four.addEventListener("click", () => addNum(4))

const five = document.querySelector(".five")
five.addEventListener("click", () => addNum(5))

const six = document.querySelector(".six")
six.addEventListener("click", () => addNum(6))

const delet = document.querySelector(".delete")
delet.addEventListener("click", () => deleteNum())

const mul = document.querySelector(".mul")
mul.addEventListener("click", () => multiplyNums())

const div = document.querySelector(".div")
div.addEventListener("click", () => divideNums())

const seven = document.querySelector(".seven")
seven.addEventListener("click", () => addNum(7))

const eight = document.querySelector(".eight")
eight.addEventListener("click", () => addNum(8))

const nine = document.querySelector(".nine")
nine.addEventListener("click", () => addNum(9))

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => clearNums())

const comma = document.querySelector(".comma")
comma.addEventListener("click", () => addNum("."))

const eq = document.querySelector(".eq")
eq.addEventListener("click", () => equals()) 

let listOfNums = [];

const currentScreen = document.getElementById("calcText")
let hiddenNum = null;
let currentNum = 0;
let operator = null;

function listToNum() {
    return parseFloat(listOfNums.join(""), 10)
}

function addNum(num) {
    if (!(num == "." && listOfNums.indexOf('.') != -1)) {
        listOfNums.push(num)
        currentNum = listToNum()
        currentScreen.textContent = currentNum
    }
}

function deleteNum() {
    listOfNums.pop()
    currentNum = listToNum()
    currentScreen.textContent = currentNum
}

function clearNums() {
    hiddenNum = null
    listOfNums = []
    currentScreen.textContent = 0
    actionKeys.forEach(key => key.classList.remove('pressed'))
}

function sumNums() {
    if (hiddenNum !== null) {
        equals()
    }

    listOfNums = []
    hiddenNum = currentNum
    currentScreen.textContent = currentNum;
    currentNum = 0;
    operator = "+"
}

function multiplyNums() {
    if (hiddenNum !== null) {
        equals()
    }

    listOfNums = []
    hiddenNum = currentNum
    currentScreen.textContent = currentNum;
    currentNum = 0;
    operator = "*"
}

function divideNums() {
    if (hiddenNum !== null) {
        equals()
    }

    listOfNums = []
    hiddenNum = currentNum
    currentScreen.textContent = currentNum;
    currentNum = 0;
    operator = "/"
}

function minusNums() {
    if (hiddenNum !== null) {
        equals()
    }

    listOfNums = []
    hiddenNum = currentNum
    currentScreen.textContent = currentNum;
    currentNum = 0;
    operator = "-"
}

function equals() {
    if (hiddenNum === null && operator === null) {
        currentScreen.textContent = currentNum
        return 0
    }

    if (currentNum == 0 && operator == "/") {
        alert("https://youtu.be/Q5HGDWlcCRs?t=15")
    }
    currentNum = operate(hiddenNum, operator, currentNum)
    hiddenNum = null

    let strLength = currentNum.toString().length
    if (strLength > 12) {
        if (currentNum.toString().includes(".")) {
            if (strLength > 12) {
                strLength = 12
            }
            currentNum = currentNum.toFixed(12 - strLength)            
        } else {
            currentNum = currentNum.toExponential(6)
        }
    }

    currentScreen.textContent = currentNum
    operator = null
}

const actionKeys = document.querySelectorAll(".action")

console.table(actionKeys)

actionKeys.forEach(key => key.addEventListener('click', (e) => {
    actionKeys.forEach(key => key.classList.remove('pressed'))
    key.classList.add('pressed')
}));