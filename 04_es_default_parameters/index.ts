// Outdated implementation
// const f = (a: number | string) => {
//   a = a || 10;
//   return "Hello = " + a;
// };
// console.log(f());

// ===============================

// default parameters
let b: number;
const f2 = (b = 99): string => {
  return "Hello = " + b;
};
console.log(f2());

let first: number;
let second: number;
let third = (): number => 0.03;
const sumAll = (first = 20, second = 10 + third()): number => {
  return first + second;
};
console.log(sumAll(5));
console.log(sumAll(1, 2));
console.log(sumAll(undefined, 2));

let greeting: string;
let sname: string;
const greet = (greeting = "Hello", sname = "Person_name") => {
  console.log(`${greeting} ${sname}`);
};

greet("Hay", "Poll");
greet();

// ===============================

// rest parameters
// ES5
// function sum(): void {
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(arguments instanceof Array);

//     var sum: number = 0;

//     Array.prototype.forEach.call(arguments, function(value) {
//         sum += value;
//     })
//     console.log(sum);

// }

// sum(1,2,3,4);

function sumN(...values: any[]) {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(arguments instanceof Array);

  let sum: number = 0;

  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
  console.log(values);
}
sumN(11, 12, 13);

function sumNV(...values: number[]) {
  let sum: number = 0;
  sum = values.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  console.log(`sum = ${sum}`);
  console.log(sum);
  console.log(values);
}
sumNV(11, 22, 11);
