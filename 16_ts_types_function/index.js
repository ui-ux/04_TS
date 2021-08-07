// base types
var str = "test string";
var num = 33;
var isBool = true;
var test;
var test2;
// Array types
var numArray = [1, 2, 3];
var strArray = ["1", "2", "3"];
var strBool = [true, false];
// or
var numArray2 = [1, 2, 3];
var strArray2 = ["1", "2", "3"];
var strBool2 = [true, false];
// tuples
var arr = [1, 2, "3"];
// functions
var fname = "Billy";
var age = 22;
var testFunc = 22;
function getName() {
    return fname;
}
function getAge() {
    return age;
}
function getAge2(testFunc) {
    return testFunc;
}
console.log(getName());
console.log(getAge2(33));
function getAdd(c, p) {
    if (p === void 0) { p = 88; }
    return c + p;
}
console.log(getAdd("Wetry"));
// void always returns 'undefined'
function getTest(t) {
    console.log(t);
}
getTest("Poiyu");
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(22, 33));
