const body = document.querySelector("body");

const calculator = document.createElement("div");
calculator.classList.add("calculator");
body.appendChild(calculator);

const display = document.createElement("div");
display.classList.add("display");
calculator.appendChild(display);

const keyContainer = document.createElement("div");
keyContainer.classList.add("keyContainer");
calculator.appendChild(keyContainer);

const keys = ["AC","+ / -","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,",",".","="]
keys.forEach((key) => {
    const div = document.createElement("div");
    div.classList.add("keys");
    div.textContent = key;
    keyContainer.appendChild(div);
})