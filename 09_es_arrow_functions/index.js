var sum = function (x, y) {
    return x + y;
};
var square = function (z) {
    return z * z;
};
var test = function () {
    return console.log('s test');
};
var sum2 = function (a, b) {
    var result = a + b;
    return result;
};
var user = function () {
    return ({ name: 'user name' });
};
(function () {
    return console.log('IIFI');
})();
console.log(sum(12, 13));
console.log(square(5));
test();
console.log(sum2(5, 67));
console.log(user());
var obj = {
    name: 'QWERRTY',
    getName: function () {
        var self = this;
        setTimeout(function () {
            console.log("Name " + self.name);
        }, 2000);
    }
};
var obj2 = {
    name: 'QWERRTY',
    getName: function () {
        var _this = this;
        setTimeout(function () {
            console.log("Name " + _this.name);
        }, 2000);
    }
};
obj.getName();
obj2.getName();
