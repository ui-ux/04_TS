/*

var buttons = document.querySelectorAll('button');
var a;
var button;

for (a = 0; a < buttons.length; a++) {
    button = buttons[a];
    button.innerText = a;
    button.onclick = function (e) {
        console.log(a)
    }
}*/
// let
var buttons = document.querySelectorAll('button');
var _loop_1 = function (a) {
    var button = buttons[a];
    button.innerText = String(a);
    button.onclick = function () {
        console.log(a);
    };
};
for (var a = 0; a < buttons.length; a++) {
    _loop_1(a);
}
// const
var PI = 3.14159;
console.log(PI);
var M = {
    CPI: 3.14156
};
console.log(M.CPI);
M.CPI = 3.15;
console.log(M.CPI);
// spread operator
var arr_1 = ['1', '2', '3'];
var arr_2 = ['3', '4', '5'];
var arr_3 = arr_1.concat([0], arr_2);
console.log(arr_3);
function add(x, y, z) {
    console.log(x + y + z);
}
var numbers = [4, 5, 7];
add.apply(void 0, numbers);
// pattern strings
function addName(name) {
    console.log('Hello ' + name);
    console.log("Hello " + name);
    console.log(("Hello " + name).toUpperCase());
}
addName('Bill');
function addSum(x, y) {
    console.log("sum = " + x + " + " + y + " = " + (x + y));
    // + parseInt()
}
addSum(11, 22);
// tagging
var fName = 'Bill';
function upperName(literals) {
    return literals.toUpperCase();
    //return literals[0].toUpperCase();
}
console.log(upperName("Hello " + fName));
console.log(upperName("test app"));
function upperNameS(literals, value) {
    console.log(literals, value);
}
console.log(upperNameS("test app", 333));
// default parameters
function greet(greeting, name) {
    if (greeting === void 0) { greeting = 'Hello'; }
    if (name === void 0) { name = 'Eny'; }
    console.log(greeting + " " + name);
}
greet('Hay', 'Pol');
greet();
// rest parameters
function sumN() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    values.forEach(function (value) {
        sum = values.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        console.log("sum = " + sum);
    });
    console.log(sum);
    console.log(values);
}
sumN(1, 2, 3);
sumN(11, 12, 13);
// for in 
// for of
var arr = ['t', 'e', 's', 't'];
var arr2 = ['t', 'e', 's', 't'];
for (var a in arr) {
    console.log(a);
}
for (var index in arr) {
    console.log(arr[index]);
}
for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
    var a = arr2_1[_i];
    console.log(a);
}
console.log(arr);
