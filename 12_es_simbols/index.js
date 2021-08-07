var _a, _b;
var sym = Symbol("text");
console.log(typeof sym);
var s1 = Symbol("test1");
var s2 = Symbol("test1");
console.log("s1 == s2  " + (s1 == s2));
console.log("s1 === s2\" " + (s1 === s2));
var s3 = Symbol["for"]("test1");
var s4 = Symbol["for"]("test1");
console.log("let s3 = Symbol.for(\"test1\") == let s4 = Symbol.for(\"test1\") " + (s3 == s4));
console.log("let s3 = Symbol.for(\"test1\") === let s4 = Symbol.for(\"test1\") " + (s3 == s4));
var s5 = Symbol("testN");
var obj = (_a = {
        age: 20
    },
    _a[s5] = "name",
    _a);
console.log("obj  " + obj);
console.log("obj['testN'] " + obj["testN"]);
console.log("obj[s5] " + obj[s5]);
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
//===============================================
console.log("//===============================================");
var num = 1;
var str = "str";
var arr = [1, 2, 3];
var obj2 = { name: "Bill" };
//console.log(typeof num[Symbol.iterator]);
console.log(typeof str[Symbol.iterator]);
console.log(typeof arr[Symbol.iterator]);
//console.log(typeof obj2[Symbol.iterator]);
var fib = (_b = {},
    _b[Symbol.iterator] = function () {
        var pre = 0, cur = 1;
        return {
            next: function () {
                var _a;
                _a = [cur, pre + cur], pre = _a[0], cur = _a[1];
                return { value: cur, done: false };
            }
        };
    },
    _b);
for (var _i = 0, fib_1 = fib; _i < fib_1.length; _i++) {
    var n = fib_1[_i];
    if (n > 15)
        break;
    console.log(n);
}
