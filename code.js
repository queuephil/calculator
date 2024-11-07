const body = document.querySelector("body");

const calculator = document.createElement("div");
calculator.classList.add("calculator");
body.appendChild(calculator);

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "";
calculator.appendChild(display);

const keyContainer = document.createElement("div");
keyContainer.classList.add("keyContainer");
calculator.appendChild(keyContainer);

const keys = [7,8,9,"/",4,5,6,"*",1,2,3,"-",0,"AC","=","+"]
keys.forEach((key) => {
    const div = document.createElement("div");
    div.classList.add("keys");
    if(!isNaN(parseInt(key))) {div.classList.add("numbers")};
    if(isNaN(parseInt(key))) {div.classList.add("operators")};
    if(key == "/") {div.classList.add("divide")};
    if(key == "*") {div.classList.add("multiply")};
    if(key == "-") {div.classList.add("subtract")};
    if(key == "+") {div.classList.add("add")};
    if(key == "=") {div.classList.add("equals")};
    if(key == "AC") {div.classList.add("AC")};
    div.textContent = key;
    div.addEventListener("mousedown", () => {
        div.style.opacity = "0.75";
    });
    div.addEventListener("mouseup", () => {
        div.style.opacity = "1";
    });
    keyContainer.appendChild(div);
});

function add(a, b) {let result = a + b; return result;};
function subtract(a, b) {let result = a - b; return result;};
function multiply(a, b) {let result = a * b; return result;};
function divide(a, b) {let result = a / b; return result;};

let oldNumber = "";
let newNumber = "";
let operator = "";

function operate() {
    let result = operator(oldNumber, newNumber)
    return result;
};

// get first number
const arrayFirst = [];

const getFirst = document.querySelectorAll(".numbers");
getFirst.forEach((key) => {
    key.addEventListener("click", () => {
        if(operator == "") {
            arrayFirst.push(key.textContent);
            let integer = arrayFirst.join("");
            oldNumber = parseInt(integer);
            display.textContent = oldNumber;
            console.log("oldNumber: " + oldNumber);
        }   
    });
});
// get operator
const getOperator = document.querySelectorAll(".operators")
getOperator.forEach((key) => {
    key.addEventListener("click", () => {
        if(key.textContent == "/") {operator = divide};
        if(key.textContent == "*") {operator = multiply};
        if(key.textContent == "-") {operator = subtract};
        if(key.textContent == "+") {operator = add};
        display.textContent = key.textContent;
        // console.log("oldNumber: " + oldNumber);
        // console.log("operator: " + operator);
    });
});

// get second number
const arraySecond = [];

const getSecond = document.querySelectorAll(".numbers");
getSecond.forEach((key) => {
    key.addEventListener("click", () => {
        if(operator != "") {
            arraySecond.push(key.textContent);
            let integer = arraySecond.join("");
            newNumber = parseInt(integer);
            display.textContent = newNumber;
            console.log("oldNumber: " + oldNumber);
            console.log("newNumber: " + newNumber);
        }
    });
});
// get result
const result = document.querySelector(".equals");
result.addEventListener("click", () => {
        let result = operate();
        display.textContent = result;
        oldNumber = result;
        newNumber = "";
        operator = "";
        arrayFirst.length = 0;
        arraySecond.length = 0; 
});

// AC
const ac = document.querySelector(".AC");
ac.addEventListener("click", () => {
        oldNumber = "";
        newNumber = "";
        operator = "";
        arrayFirst.length = 0;
        arraySecond.length = 0; 
        display.textContent = "";
});



// let test = operate();
// console.log(test);