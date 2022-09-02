"use strict";
// es5
let person = {
  name: "Bill",
  age: 30,
};

let newname = person.name;
let newsname = person.age;

console.log(newname); // => Bill
console.log(newsname); // => 30
console.log("-------------------------------------------");

// es6

let options = {
  title: "menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;

console.log(title); // => menu
console.log(width); // => 100
console.log(height); // => 200
console.log("-------------------------------------------");

let { title: t, width: w, height: h } = options;
console.log(t); // => menu
console.log(w); // => 100
console.log(h); // => 200
console.log("-------------------------------------------");

// ARR
// es5
let arr1 = ["name", 22, "sname"];
let arrNewName = arr1[0];
let arrNewAge = arr1[1];
let arrNewSname = arr1[2];

console.log(arrNewName);
console.log(arrNewAge);
console.log(arrNewSname);
console.log("-------------------------------------------");

// es6
let arr2 = ["name3", 22, "sname3"];
console.log(arr2);
let [arr2NewName, arr2NewAge, arr2NewSname] = arr2;
console.log(arr2NewName); // => name3
console.log(arr2NewAge); // => 22
console.log(arr2NewSname); // => sname3
console.log(arr2);
console.log("-------------------------------------------");

let city = "NW";
let arr3 = ["name3", , "sname3", city];
let [arr3NewName, arr3NewAge, arr3NewSname] = arr3;
console.log(arr3NewName); // => name3
console.log(arr3NewAge); // => undefined
console.log(arr3NewSname); // => sname3
console.log(city); // => NW
console.log("-------------------------------------------");

let arr4 = ["name1", "sname2", "sname3"];
let [arr4NewName, ...arr4NewSname] = arr4;
console.log(arr4NewSname); // => ['sname2', 'sname3']
console.log(arr4); // => ['name1', 'sname2', 'sname3']
console.log("-------------------------------------------");

let arr = ["test", "test2"];
let [, , last = "test3"] = arr;
console.log(last); // => test3
console.log("-------------------------------------------");

// function

let arr5 = ["name5", 55, "sname5"];
let x;
let a = (x: any) => console.log(x);

a(arr5); // => ['name5', 55, 'sname5']

// -------------
let [x1, y1] = [1, 2]; // let x1 = 1, let y1 = 2;
[x1, y1] = [x1 + 1, y1 + 2]; // x1 = x1 + 1, y1 = y1 +2
[x1, y1] = [y1, x1];

// function 2
let toPolar = (x: any, y: any) => {
  const m = [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
  console.log(m);
};

toPolar(1, 2); // => [2.23606797749979, 1.1071487177940904]

let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }; // color RDBA
let { r, g, b } = transparent;
console.log(transparent); // => {r: 0, g: 0, b: 0, a: 1}

const { sin, cos, tan } = Math;
console.log(cos(45)); // => 0.5253219888177297
console.log(Math.cos(45)); // => 0.5253219888177297
