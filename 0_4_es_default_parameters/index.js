// default parameters
var greeting;
var sname;
function greet(greeting, sname) {
    if (greeting === void 0) { greeting = 'Hello'; }
    if (sname === void 0) { sname = 'Person_name'; }
    console.log(greeting + " " + sname);
}
greet('Hay', 'Poll');
greet();
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
