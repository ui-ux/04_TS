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
let buttons = document.querySelectorAll('button');

for (let a = 0; a < buttons.length; a++) {
    let button = buttons[a];
    button.innerText = String(a);
    button.onclick = function() {
        console.log(a);
    }
}

// const
const PI = 3.14159;
console.log(PI);

const M = {
    CPI: 3.14156
};

console.log(M.CPI);

M.CPI = 3.15;
console.log(M.CPI);

// spread operator
let arr_1 = ['1', '2', '3'];
let arr_2 = ['3', '4', '5'];
let arr_3 = [...arr_1, 0, ...arr_2];
console.log(arr_3);

function add(x:number, y:number, z:number) {
    console.log(x + y + z);
}
let numbers: [number, number, number] = [4, 5, 7];
add(...numbers);

// pattern strings
function addName(name:string) {
    console.log('Hello ' + name);
    console.log(`Hello ${name}`);
    console.log(`Hello ${name}`.toUpperCase());
}
addName('Bill');

function addSum(x:number,y:number) {
    console.log(`sum = ${x} + ${y} = ${x + y}`);
    // + parseInt()
    
}
addSum(11,22);

// tagging


let fName:string = 'Bill';

function upperName(literals: string) {
    return literals.toUpperCase();
    //return literals[0].toUpperCase();
}

console.log(upperName(`Hello ${fName}`));
console.log(upperName(`test app`));

function upperNameS(literals: string, value:any) {
    console.log(literals, value);
}

console.log(upperNameS(`test app`, 333));


// default parameters

function greet(greeting:string = 'Hello', name:string = 'Eny') {
    console.log(`${greeting} ${name}`)
}

greet('Hay', 'Pol');
greet();

// rest parameters

function sumN(...values:number[]) {
    let sum: number = 0;
    values.forEach(function (value) {
        sum = values.reduce(function(previousValue, currentValue){
            return previousValue + currentValue
        });
        console.log(`sum = ${sum}`);
    });
    console.log(sum);
    console.log(values);
}
sumN(1, 2 , 3);
sumN(11, 12 , 13);

// for in 
// for of
let arr = ['t', 'e', 's', 't'];
let arr2 = ['t', 'e', 's', 't'];
for(let a in arr) {
    console.log(a);
}
for(let index in arr) {
    console.log(arr[index]);
}
for(let a of arr2) {
    console.log(a);
}
console.log(arr);