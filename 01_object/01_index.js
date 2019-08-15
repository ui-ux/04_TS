var firsName = 'Billy';
var lastName = 'Bonth';
var person = {
    firsName: firsName,
    lastName: lastName,
    //method
    method: function () {
        console.log("list " + this.lastName);
    }
};
console.log(person);
person.method();
person.firsName = 'firsName Billy';
console.log(person.firsName);
person['firsName'] = 'firsName Billy 2';
console.log(person.firsName);
/*let prop:string = 'lastName';
console.log(person[prop]);*/
function D(property, value) {
    var _a;
    return _a = {},
        _a[property] = value,
        _a['_' + property] = value,
        _a[property.toUpperCase()] = value,
        _a;
}
console.log(D('qwerty', 'ytrewq'));
var firsName2 = 'Billy';
var lastName2 = 'Bonth';
var person2 = {
    firsName2: firsName2,
    lastName2: lastName2,
    //method
    method2: function () {
        console.log("list " + this.lastName2);
    },
    get fullName2() {
        return this.firsName2 + ' ' + this.lastName2;
    },
    set fullName2(value) {
        this.firsName2 = value;
    }
};
