// Outdated implementation
// const f = (a: number | string) => {
//   a = a || 10;
//   return "Hello = " + a;
// };
// console.log(f());
// ===============================
// default parameters
var b;
var f2 = function (b) {
    if (b === void 0) { b = 99; }
    return "Hello = " + b;
};
console.log(f2());
var first;
var second;
var third = function () { return 0.03; };
var sumAll = function (first, second) {
    if (first === void 0) { first = 20; }
    if (second === void 0) { second = 10 + third(); }
    return first + second;
};
console.log(sumAll(5));
console.log(sumAll(1, 2));
console.log(sumAll(undefined, 2));
var greeting;
var sname;
var greet = function (greeting, sname) {
    if (greeting === void 0) { greeting = "Hello"; }
    if (sname === void 0) { sname = "Person_name"; }
    console.log(greeting + " " + sname);
};
greet("Hay", "Poll");
greet();
// ===============================
// rest parameters
// ES5
// function sum(): void {
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(arguments instanceof Array);
//     var sum: number = 0;
//     Array.prototype.forEach.call(arguments, function(value) {
//         sum += value;
//     })
//     console.log(sum);
// }
// sum(1,2,3,4);
function sumN() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    console.log(arguments);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    var sum = 0;
    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
    console.log(values);
}
sumN(11, 12, 13);
function sumNV() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    sum = values.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    console.log("sum = " + sum);
    console.log(sum);
    console.log(values);
}
sumNV(11, 22, 11);
