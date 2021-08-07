function genericGetter(data) {
    return data;
}
var newGetter = genericGetter;
console.log(newGetter("text12345").length);
//console.log(newGetter(10).length);
console.log(newGetter(50));
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var Task = /** @class */ (function () {
    function Task(a, b) {
        this.a = a;
        this.b = b;
    }
    Task.prototype.getResult = function () {
        return +this.a * Number(this.b);
    };
    return Task;
}());
var m = new Task(10, 5);
console.log(m.getResult());
//let m2 = new Task('7', '70');
//console.log(m2.getResult());
