// assign
let obj1 = { a: 11 };
let obj2 = { b: 22, c: 33 };
console.log(obj1);
console.log(obj2);

let obj11 = Object.assign(obj1, obj2);
console.log(obj11);

let obj3 = Object.assign({ d: 44 }, obj1, obj2);
console.log(obj3);

// find
let itemF = [1, 2, 3, 4, 5, 3, 7, 2].find((x) => x > 3);
console.log(itemF);

// str methods
let newStr = "test text ";
console.log(newStr.repeat(2));
console.log(newStr.startsWith("tes", 0));
console.log(newStr.includes("tes", 0));

let arr: Array<any>;
function filter_list(l: any) {
  console.log(l.filter((arr: any) => typeof arr == "number"));
}

filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123]);
