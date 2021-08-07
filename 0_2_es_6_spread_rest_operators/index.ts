// rest
function add2(x: any, ...y: any) {
  console.log(x, y);
}
add2("199", "2", "3", "33", "test");
console.log("________________________________");

// spread
let arr_1 = ["199", "2", "3"];
let arr_2 = ["3", "4", "5"];
let arr_3 = [...arr_1, 0, ...arr_2];
console.log(arr_3);
console.log("________________________________");

//
function add(x: number, y: number, z: number) {
  console.log(x + y + z);
}

let numbers: [number, number, number] = [4, 5, 7];
add(...numbers);
