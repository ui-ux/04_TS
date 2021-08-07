// assign
var obj1 = { a: 11 };
var obj2 = { b: 22, c: 33 };
console.log(obj1);
console.log(obj2);
var obj11 = Object.assign(obj1, obj2);
console.log(obj11);
var obj3 = Object.assign({ d: 44 }, obj1, obj2);
console.log(obj3);
// find
var itemF = [1, 2, 3, 4, 5, 3, 7, 2].find(function (x) { return x > 3; });
console.log(itemF);
// str methods
var newStr = "test text ";
console.log(newStr.repeat(2));
console.log(newStr.startsWith("tes", 0));
console.log(newStr.includes("tes", 0));
var arr;
function filter_list(l) {
    console.log(l.filter(function (arr) { return typeof arr == "number"; }));
}
filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123]);
