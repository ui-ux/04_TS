var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// pattern strings
function addName(name) {
    console.log('Hello ' + name);
    console.log("Hello " + name);
    console.log(typeof ("Hello " + name));
    console.log(("Hello " + name).toUpperCase());
}
addName('Bill');
function addSum(x, y) {
    console.log("sum = " + x + " + " + y + " = " + (x + y));
}
addSum(11, 22);
function addSum2(x, y) {
    console.log("\n    sum2 = \n    " + x + " + \n    " + y + " = \n    " + (parseInt(x) + parseInt(y)) + "\n    ");
}
addSum2('33', '77');
// tagging
var sName = 'Bill';
function upperName(literals, value) {
    console.log(literals, value);
    console.log(typeof literals);
    console.log(typeof value);
    return literals[0] + value.toUpperCase();
}
console.log(upperName(__makeTemplateObject(["Hello ", ""], ["Hello ", ""]), sName));
var name33 = ['name1', 'name2'];
function upperName2(literals) {
    var value = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        value[_i - 1] = arguments[_i];
    }
    console.log(literals, value);
    console.log(typeof literals);
    console.log(typeof value);
    return literals[0] + value;
}
console.log(upperName2(__makeTemplateObject(["Hello "], ["Hello "])) + name33.join(' | '));
