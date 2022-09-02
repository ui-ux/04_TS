"use strict";
var _a, _b;
// es5
var person = {
    name: "Bill",
    age: 30
};
var newname = person.name;
var newsname = person.age;
console.log(newname); // => Bill
console.log(newsname); // => 30
console.log("-------------------------------------------");
// es6
var options = {
    title: "menu",
    width: 100,
    height: 200
};
var title = options.title, width = options.width, height = options.height;
console.log(title); // => menu
console.log(width); // => 100
console.log(height); // => 200
console.log("-------------------------------------------");
var t = options.title, w = options.width, h = options.height;
console.log(t); // => menu
console.log(w); // => 100
console.log(h); // => 200
console.log("-------------------------------------------");
// ARR
// es5
var arr1 = ["name", 22, "sname"];
var arrNewName = arr1[0];
var arrNewAge = arr1[1];
var arrNewSname = arr1[2];
console.log(arrNewName);
console.log(arrNewAge);
console.log(arrNewSname);
console.log("-------------------------------------------");
// es6
var arr2 = ["name3", 22, "sname3"];
console.log(arr2);
var arr2NewName = arr2[0], arr2NewAge = arr2[1], arr2NewSname = arr2[2];
console.log(arr2NewName); // => name3
console.log(arr2NewAge); // => 22
console.log(arr2NewSname); // => sname3
console.log(arr2);
console.log("-------------------------------------------");
var city = "NW";
var arr3 = ["name3", , "sname3", city];
var arr3NewName = arr3[0], arr3NewAge = arr3[1], arr3NewSname = arr3[2];
console.log(arr3NewName); // => name3
console.log(arr3NewAge); // => undefined
console.log(arr3NewSname); // => sname3
console.log(city); // => NW
console.log("-------------------------------------------");
var arr4 = ["name1", "sname2", "sname3"];
var arr4NewName = arr4[0], arr4NewSname = arr4.slice(1);
console.log(arr4NewSname); // => ['sname2', 'sname3']
console.log(arr4); // => ['name1', 'sname2', 'sname3']
console.log("-------------------------------------------");
var arr = ["test", "test2"];
var _c = arr[2], last = _c === void 0 ? "test3" : _c;
console.log(last); // => test3
console.log("-------------------------------------------");
// function
var arr5 = ["name5", 55, "sname5"];
var x;
var a = function (x) { return console.log(x); };
a(arr5); // => ['name5', 55, 'sname5']
// -------------
var _d = [1, 2], x1 = _d[0], y1 = _d[1]; // let x1 = 1, let y1 = 2;
_a = [x1 + 1, y1 + 2], x1 = _a[0], y1 = _a[1]; // x1 = x1 + 1, y1 = y1 +2
_b = [y1, x1], x1 = _b[0], y1 = _b[1];
// function 2
var toPolar = function (x, y) {
    var m = [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
    console.log(m);
};
toPolar(1, 2); // => [2.23606797749979, 1.1071487177940904]
var transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }; // color RDBA
var r = transparent.r, g = transparent.g, b = transparent.b;
console.log(transparent); // => {r: 0, g: 0, b: 0, a: 1}
var sin = Math.sin, cos = Math.cos, tan = Math.tan;
console.log(cos(45));
console.log(Math.cos(45));
