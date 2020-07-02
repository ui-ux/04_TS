var user = {
    name: 'Name',
    age: 50,
    arr: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    }
};
//  logName2? <-
var user2 = {
    name: 'Name',
    age: 50,
    arr: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    }
};
var user3 = {
    name: 'Name',
    age: 50,
    arr: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    },
    logName2: function () {
        console.log(this.name);
    }
};
