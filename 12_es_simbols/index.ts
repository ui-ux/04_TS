let sym = Symbol("text");
console.log(typeof sym);

let s1 = Symbol("test1");
let s2 = Symbol("test1");

console.log(`s1 == s2  ${s1 == s2}`);
console.log(`s1 === s2" ${s1 === s2}`);

let s3 = Symbol.for("test1");
let s4 = Symbol.for("test1");
console.log(
  `let s3 = Symbol.for("test1") == let s4 = Symbol.for("test1") ${s3 == s4}`
);
console.log(
  `let s3 = Symbol.for("test1") === let s4 = Symbol.for("test1") ${s3 == s4}`
);

let s5 = Symbol("testN");

let obj = {
  age: 20,
  [s5]: "name",
};

console.log(`obj  ${obj}`);
console.log(`obj['testN'] ${obj["testN"]}`);
console.log(`obj[s5] ${obj[s5]}`);

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

//===============================================
console.log(`//===============================================`);
let num = 1;
let str = "str";
let arr = [1, 2, 3];
let obj2 = { name: "Bill" };
//console.log(typeof num[Symbol.iterator]);
console.log(typeof str[Symbol.iterator]);
console.log(typeof arr[Symbol.iterator]);
//console.log(typeof obj2[Symbol.iterator]);

let fib = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: false };
      },
    };
  },
};

for (let n of fib) {
  if (n > 15) break;
  console.log(n);
}
