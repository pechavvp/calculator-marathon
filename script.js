const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const myAct = prompt('Введите действие');

const operations = {
    "+": "sum",
    "-": "sub",
    "*": "mult",
    "/": "div",
    "%": "rem",
    "**": "pow",
};


function Calc(myAct, a, b) {
    if (isNaN(a) === true || isNaN(b) === true || a === "" || b === "" || myAct === "" || a === null || b === null || myAct === null) {
        return console.log("Error");
    } else if (myAct === operations["+"]) {
        return console.log(a + b);
    } else if (myAct === operations["-"]) {
        return console.log(a - b);
    } else if (myAct === operations["*"]) {
        return console.log(a * b);
    } else if (myAct === operations["/"]) {
        return console.log(a / b);
    } else if (myAct === operations["%"]) {
        return console.log(a % b);
    } else if (myAct === operations["**"]) {
        return console.log(a ** b);
    } else {
        return console.log("unknown operation");
    }
}

Calc(myAct, a, b);