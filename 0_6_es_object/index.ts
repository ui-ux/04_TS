"use strict";
let firsName = 'Billy';
let lastName = 'Bonth';

let person = {
    newfirsName: firsName,
    newlastName: lastName,
    //method
    method () {
        console.log(this.newfirsName);
        console.log(`list- ${this.newlastName}`);
    }
};

console.log(person.newfirsName);
console.log(person);
person.method();

person.newfirsName = 'Billy 2';
console.log(person.newfirsName);

person['newfirsName'] = 'firsName Billy 2';
console.log( typeof person['newfirsName']);
console.log(person.newfirsName);

let property = person.newfirsName;
console.log(`property - ${property}`);


function D(property:any, value:any) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property]
        }
    };
}
console.log(D('qwerty33', 'ytrewq44'));


let firsName2 = 'Billy';
let lastName2 = 'Bonth';
let person2 = {
    firsName2,
    lastName2,
    //method
    method2 () {
        console.log(`list ${this.lastName2}`);
    },

    get fullName() {
        return this.firsName2 + ' ' + this.lastName2
    },

    set fullName(value) {
        this.firsName2 = value;
    }

};

console.log(person2);
