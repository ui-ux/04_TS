var a;
console.log("var a = " + a); // => undefined
var b = 1;
console.log("var b = " + b); // => 1
console.log("var c = " + c); // => undefined
var c = 1;
var s;
console.log("let s = " + s); // => undefined
var d = 2;
console.log("let d = " + d); // => 2
// console.log("let f = " + f);
// Uncaught ReferenceError: Cannot access 'f' before initialization at
var f = 2; // => 'f' is declared here.
// Uncaught ReferenceError: Cannot access 'g' before initialization at
// console.log('const g = ' +  g);
// const g = 2;
// let, const Cannot access 'f' before initialization
