var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Task = /** @class */ (function () {
    function Task(title) {
        this.title = title;
        this.done = false;
        console.log("task 1");
    }
    Task.prototype.complete = function () {
        this.done = true;
        console.log("task 1 done " + this.title + " ");
    };
    return Task;
}());
var SubTask = /** @class */ (function (_super) {
    __extends(SubTask, _super);
    function SubTask(title, parent) {
        var _this = _super.call(this, title) || this;
        _this.parent = parent;
        console.log("task 2");
        return _this;
    }
    SubTask.prototype.complete = function () {
        _super.prototype.complete.call(this);
        console.log("task 2 done " + this.title + " ");
    };
    return SubTask;
}(Task));
var task = new Task('prop 1');
var subtask = new SubTask('prop 2', task);
console.log(task);
console.log(subtask);
console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);
task.complete();
subtask.complete();
var Car = /** @class */ (function () {
    function Car() {
        this.number = 2020;
        this.color = 'red';
    }
    Car.prototype.getCarColor = function () {
        return this.color;
    };
    return Car;
}());
var Hd = /** @class */ (function (_super) {
    __extends(Hd, _super);
    function Hd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hd.prototype.nameCuntry = function (name) {
        console.log(name);
    };
    return Hd;
}(Car));
var car = new Hd();
console.log(car);
car.nameCuntry('blue');
console.log(car.getCarColor());
