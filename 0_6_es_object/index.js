"use strict";
var firsName = 'Billy';
var lastName = 'Bonth';
var person = {
    newfirsName: firsName,
    newlastName: lastName,
    //method
    method: function () {
        console.log(this.newfirsName);
        console.log("list- " + this.newlastName);
    }
};
console.log(person.newfirsName);
console.log(person);
person.method();
person.newfirsName = 'Billy 2';
console.log(person.newfirsName);
person['newfirsName'] = 'firsName Billy 2';
console.log(typeof person['newfirsName']);
console.log(person.newfirsName);
var property = person.newfirsName;
console.log("property - " + property);
function D(property, value) {
    var _a;
    return _a = {},
        _a[property] = value,
        _a['_' + property] = value,
        _a[property.toUpperCase()] = value,
        _a['get' + property] = function () {
            return this[property];
        },
        _a;
}
console.log(D('qwerty33', 'ytrewq44'));
var firsName2 = 'Billy';
var lastName2 = 'Bonth';
var person2 = {
    firsName2: firsName2,
    lastName2: lastName2,
    //method
    method2: function () {
        console.log("list " + this.lastName2);
    },
    get fullName() {
        return this.firsName2 + ' ' + this.lastName2;
    },
    set fullName(value) {
        this.firsName2 = value;
    }
};
console.log(person2);
