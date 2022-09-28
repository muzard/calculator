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

const one = document.getElementById("one")
one.addEventListener("click", () => addNum(1))

const two = document.getElementById("two")
two.addEventListener("click", () => addNum(2))

const three = document.getElementById("three")
three.addEventListener("click", () => addNum(3))

const zero = document.getElementById("zero")
zero.addEventListener("click", () => addNum(0))

const plus = document.getElementById("plus")
plus.addEventListener("click", () => sumNums())

const minus = document.getElementById("minus")
minus.addEventListener("click", () => alert("minus"))


const four = document.getElementById("four")
four.addEventListener("click", () => addNum(4))

const five = document.getElementById("five")
five.addEventListener("click", () => addNum(5))

const six = document.getElementById("six")
six.addEventListener("click", () => addNum(6))

const delet = document.getElementById("delete")
delet.addEventListener("click", () => deleteNum())

const mul = document.getElementById("mul")
mul.addEventListener("click", () => multiplyNums())

const div = document.getElementById("div")
div.addEventListener("click", () => alert("div"))

const seven = document.getElementById("seven")
seven.addEventListener("click", () => addNum(7))

const eight = document.getElementById("eight")
eight.addEventListener("click", () => addNum(8))

const nine = document.getElementById("nine")
nine.addEventListener("click", () => addNum(9))

const clear = document.getElementById("clear")
clear.addEventListener("click", () => clearNums())

const comma = document.getElementById("comma")
comma.addEventListener("click", () => makeFloat())

const eq = document.getElementById("eq")
eq.addEventListener("click", () => equals()) 

let listOfNums = [];

const currentScreen = document.getElementById("calcText")
let hiddenNum = null;
let currentNum = 0;
let operator;

function listToNum() {
    return parseInt(listOfNums.join(""), 10)
}

function makeFloat() {
    return 0
}

function addNum(num) {
    listOfNums.push(num)
    currentNum = listToNum()
    currentScreen.textContent = currentNum
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
}

function sumNums() {
    if (hiddenNum !== null) {
        equals()
    }

    listOfNums = []
    hiddenNum = currentNum
    currentScreen.textContent = 0;
    currentNum = 0;
    operator = "+"
}

function multiplyNums() {
    if (hiddenNum !== null) {
        equals()
    }

    listOfNums = []
    hiddenNum = currentNum
    currentScreen.textContent = 0;
    currentNum = 0;
    operator = "*"
}

function equals() {
    currentNum = operate(hiddenNum, operator, currentNum)
    hiddenNum = null
    currentScreen.textContent = currentNum
}