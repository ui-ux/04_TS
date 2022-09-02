var _a;
var firsName = "Billy";
var lastName = "Bonth";
var person = {
    firsName: firsName,
    lastName: lastName,
    //method
    method: function () {
        console.log(this.firsName);
        console.log("list- ".concat(this.lastName));
    }
};
console.log(person.firsName);
console.log(person);
person.method();
person.firsName = "Billy 2";
console.log(person.firsName);
person["firsName"] = "firsName Billy 2";
console.log(typeof person["firsName"]);
console.log(person.firsName);
var property = person.firsName;
console.log("property - ".concat(property));
function D(property, value) {
    var _a;
    return _a = {},
        _a[property] = value,
        _a["_" + property] = value,
        _a[property.toUpperCase()] = value,
        _a["get" + property] = function () {
            return this[property];
        },
        _a;
}
console.log(D("qwerty33", "ytrewq44"));
var firsName2 = "Billy";
var lastName2 = "Bonth";
var person2 = {
    firsName2: firsName2,
    lastName2: lastName2,
    //method
    method2: function () {
        console.log("list ".concat(this.lastName2));
    },
    get fullName() {
        return this.firsName2 + " " + this.lastName2;
    },
    set fullName(value) {
        this.firsName2 = value;
    }
};
console.log(person2);
// ES2020
var abc = { b: { b1: "123" } };
console.log(abc.b.b1); // => 123
var abcd = { b: {} };
console.log((_a = abcd.b) === null || _a === void 0 ? void 0 : _a.b1); // => undefined
