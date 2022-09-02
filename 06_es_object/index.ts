let firsName = "Billy";
let lastName = "Bonth";

let person = {
  firsName,
  lastName,

  //method
  method() {
    console.log(this.firsName);
    console.log(`list- ${this.lastName}`);
  },
};

console.log(person.firsName);
console.log(person);
person.method();

person.firsName = "Billy 2";
console.log(person.firsName);

person["firsName"] = "firsName Billy 2";
console.log(typeof person["firsName"]);
console.log(person.firsName);

let property = person.firsName;
console.log(`property - ${property}`);

function D(property: any, value: any) {
  return {
    [property]: value,
    ["_" + property]: value,
    [property.toUpperCase()]: value,
    ["get" + property]() {
      return this[property];
    },
  };
}
console.log(D("qwerty33", "ytrewq44"));

let firsName2 = "Billy";
let lastName2 = "Bonth";
let person2 = {
  firsName2,
  lastName2,
  //method
  method2() {
    console.log(`list ${this.lastName2}`);
  },

  get fullName() {
    return this.firsName2 + " " + this.lastName2;
  },

  set fullName(value) {
    this.firsName2 = value;
  },
};

console.log(person2);

// ES2020
let abc = { b: { b1: "123" } };
console.log(abc.b.b1); // => 123
let abcd = { b: {} };
console.log(abcd.b?.b1); // => undefined
