// pattern strings
function addName(name: string) {
  console.log("Hello " + name);
  console.log(`Hello ${name}`);
  console.log(typeof `Hello ${name}`);
  console.log(`Hello ${name}`.toUpperCase());
}
addName("Bill");

function addSum(x: number, y: number) {
  console.log(`sum = ${x} + ${y} = ${x + y}`);
}
addSum(11, 22);

function addSum2(x: any, y: any) {
  console.log(`
  <div>
    'sum2' = ${x} + ${y} = ${parseInt(x) + parseInt(y)}
    </div>
    `);
}

addSum2("33", "77");

// tagging

let sName = "Bill";

function upperName(literals: any, value: any) {
  console.log(literals, value);
  console.log(typeof literals);
  console.log(typeof value);
  return literals[0] + value.toUpperCase();
}
console.log(upperName`Hello ${sName}`);

let name33: Array<string> = ["name1", "name2"];
function upperName2(literals: any, ...value: Array<string>) {
  console.log(literals, value);
  console.log(typeof literals);
  console.log(typeof value);
  return literals[0] + value;
}

console.log(upperName2`Hello ` + name33.join(" | "));
