let firsName = 'Billy';
let lastName = 'Bonth';
let person = {
    firsName,
    lastName,
    //method
    method () {
        console.log(`list ${this.lastName}`);
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

function D(property:any, value:any) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
    };
}
console.log(D('qwerty', 'ytrewq'));

let firsName2 = 'Billy';
let lastName2 = 'Bonth';
let person2 = {
    firsName2,
    lastName2,
    //method
    method2 () {
        console.log(`list ${this.lastName2}`);
    },

    get fullName2() {
        return this.firsName2 + ' ' + this.lastName2
    },

    set fullName2(value) {
        this.firsName2 = value;
    }

};



