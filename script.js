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
one.addEventListener("click", () => alert("one"))

const two = document.getElementById("two")
two.addEventListener("click", () => alert("two"))

const three = document.getElementById("three")
three.addEventListener("click", () => alert("three"))

const zero = document.getElementById("zero")
zero.addEventListener("click", () => alert("zero"))

const plus = document.getElementById("plus")
plus.addEventListener("click", () => alert("plus"))

const minus = document.getElementById("minus")
minus.addEventListener("click", () => alert("minus"))


const four = document.getElementById("four")
four.addEventListener("click", () => alert("four"))

const five = document.getElementById("five")
five.addEventListener("click", () => alert("five"))

const six = document.getElementById("six")
six.addEventListener("click", () => alert("six"))

const delet = document.getElementById("delete")
delet.addEventListener("click", () => alert("delete"))

const mul = document.getElementById("mul")
mul.addEventListener("click", () => alert("mul"))

const div = document.getElementById("div")
div.addEventListener("click", () => alert("div"))

const seven = document.getElementById("seven")
seven.addEventListener("click", () => alert("seven"))

const eight = document.getElementById("eight")
eight.addEventListener("click", () => alert("eight"))

const nine = document.getElementById("nine")
nine.addEventListener("click", () => alert("nine"))

const clear = document.getElementById("clear")
clear.addEventListener("click", () => alert("clear"))

const comma = document.getElementById("comma")
comma.addEventListener("click", () => alert("comma"))

const eq = document.getElementById("eq")
eq.addEventListener("click", () => alert("eq")) 