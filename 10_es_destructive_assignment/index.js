'use strict';
// es5
var person = {
    name: 'Bill',
    age: 30
};
var newname = person.name;
var newsname = person.age;
console.log(newname);
console.log(newsname);
// es6
var options = {
    title: "menu",
    width: 100,
    height: 200
};
var title = options.title, width = options.width, height = options.height;
console.log(title);
console.log(width);
console.log(height);
var newtitle = options.title, newwidth = options.width, newheight = options.height;
console.log(newtitle);
console.log(newwidth);
console.log(newheight);
// ARR
// es5
var arr1 = ['name', 22, 'sname'];
var arrNewName = arr1[0];
var arrNewAge = arr1[1];
var arrNewSname = arr1[2];
console.log(arrNewName);
console.log(arrNewAge);
console.log(arrNewSname);
// es6
var arr2 = ['name3', 22, 'sname3'];
var arr2NewName = arr2[0], arr2NewAge = arr2[1], arr2NewSname = arr2[2];
console.log(arr2NewName);
console.log(arr2NewAge);
console.log(arr2NewSname);
var city = 'NW';
var arr3 = ['name3', , 'sname3', city];
var arr3NewName = arr3[0], arr3NewAge = arr3[1], arr3NewSname = arr3[2];
console.log(arr3NewName);
console.log(arr3NewAge);
console.log(arr3NewSname);
console.log(city);
var arr4 = ['name3', 'sname2', 'sname3'];
var arr4NewName = arr4[0], arr4NewSname = arr4.slice(1);
console.log(arr4NewSname);
// function
var arr5 = ['name5', 55, 'sname5'];
var x;
var a = function (x) {
    return console.log(x);
};
a(arr5);
