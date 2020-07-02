// base types
let str: string = 'test string';
let num: number = 33;
let isBool: boolean = true;
let test: any;
let test2: string | number;

// Array types
let numArray:number[] = [1, 2, 3];
let strArray:string[] = ['1', '2', '3'];
let strBool:boolean[] = [true, false];

// or
let numArray2: Array<number> = [1, 2, 3];
let strArray2: Array<string> = ['1', '2', '3'];
let strBool2: Array<boolean> = [true, false];

// tuples
let arr: [number, number, string] = [1, 2, '3'];

let fname: string = 'Billy';
let age = 22;
let testFunc: number = 22;

function getName():string {
    return fname;
}

function getAge():number {
    return age;
}

function getAge2(testFunc:number):number {
    return testFunc;
}

console.log(getName());
console.log(getAge2(33));

function getAdd(c:string, p: number = 88):string {
    return c + p;
}

console.log(getAdd('Wetry'));

function getTest(t:string):void {
    console.log(t);
}

getTest('Poiyu');

let mySum:(a: number, b:number) => number;
function sum(num1: number, num2: number):number {
    return num1 + num2;
}

mySum = sum;
console.log(mySum(22,33));