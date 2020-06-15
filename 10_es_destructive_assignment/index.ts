'use strict';
// es5
let person = {
    name: 'Bill',
    age: 30
    
}

 let newname  = person.name;
 let newsname  = person.age;

console.log(newname);
console.log(newsname);

// es6

let options = {
  title: "menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);
console.log(width);
console.log(height);

let {title:newtitle, width: newwidth, height:newheight} = options;
console.log(newtitle);
console.log(newwidth);
console.log(newheight);

// ARR
// es5
let arr1 = ['name', 22, 'sname'];
let arrNewName = arr1[0];
let arrNewAge = arr1[1];
let arrNewSname = arr1[2];

console.log(arrNewName);
console.log(arrNewAge);
console.log(arrNewSname);
// es6

let arr2 = ['name3', 22, 'sname3'];
let [arr2NewName, arr2NewAge, arr2NewSname] = arr2;
console.log(arr2NewName);
console.log(arr2NewAge);
console.log(arr2NewSname);


let city = 'NW';
let arr3 = ['name3', , 'sname3', city];
let [arr3NewName, arr3NewAge, arr3NewSname] = arr3;
console.log(arr3NewName);
console.log(arr3NewAge);
console.log(arr3NewSname);
console.log(city);

let arr4 = ['name3', 'sname2', 'sname3'];
let [arr4NewName, ...arr4NewSname] = arr4;
console.log(arr4NewSname);

// function


let arr5 = ['name5', 55, 'sname5'];
let x;
let a = (x:any) =>
  console.log(x);

a(arr5);

